const express = require('express');
const path = require('path');
const { ValidationError } = require('sequelize');
const { environment } = require('./config');
const cookieParser = require('cookie-parser');
const app = express();
