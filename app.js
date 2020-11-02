const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const createError = require('http-errors');
const { environment } = require('./config');
const { Channel } = require("./db/models");
const ChannelRepository = require("./db/channel-repository");

const app = express();

const whitelist = ['http://localhost:3000', 'https://master.d11hr0s58u56b0.amplifyapp.com'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      return callback(null, true)
    }
      callback(new Error('Not allowed by CORS'));
  }
}
app.use(cors(corsOptions));

app.use(helmet({ hsts: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const http = require('http').createServer(app);
const io = require('socket.io')(http);

/******************* Routes *******************/

const indexRouter = require('./routes/index');

app.use(indexRouter); //starter route... add more as needed

/******************* Socket Io *******************/

io.on('connection', async (socket) => {
  console.log(`${socket.id} -- Connected`);

  // Console logs when user has joined a channel
  socket.on('join', async (channelId) => {
      const channel = await Channel.findByPk(channelId);
      if (channel) {
          socket.join(channel.id, async () => {
              console.log(`${socket.id} has joined ${channel.title}`);
          });
      }
  });

  // When the socket disconnects, log something to the console.
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`);
  });

  // Gets all channels from database
  const channels = await Channel.findAll();

  // Listens to all channels in database and sets up listeners
  for (let channel of channels) {
    console.log(`listening for messages from ${channel.title}`);
    socket.on(channel.id, async ({userId, body}) => {
        console.log(`${channel.title} -- working`);
        const newMessage = await ChannelRepository.createMessage({userId, body}, channel.id);
        socket.to(channel.id).emit(channel.id, newMessage);
        socket.emit(channel.id, newMessage);
    });
  }

});

/*************** Error Handlers ***************/

app.use(function(_req, _res, next) {
  next(createError(404));
});

app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set('WWW-Authenticate', 'Bearer');
  }
  const isProduction = environment === "production";
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    error: JSON.parse(JSON.stringify(err)),
    stack: isProduction ? null : err.stack,
  });
});

/***********************************************/
module.exports = http;
