const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const ValidationErrors = require
const { environment } = require('./config');

const app = express();

app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/******************* Routes *******************/

const indexRouter = require('./routes/index');

app.use(indexRouter); //starter route... add more as needed

/*************** Error Handlers ***************/

app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});


app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === 'production';
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

/***********************************************/
module.exports = app;
