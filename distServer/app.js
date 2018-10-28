'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _tweets = require('./routes/tweets');

var _tweets2 = _interopRequireDefault(_tweets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.load();

_mongoose2.default.connect(_database2.default.database);

_mongoose2.default.connection.on('connected', function () {
  console.log('Connected to database ' + _database2.default.database);
});

_mongoose2.default.connection.on('error', function (err) {
  console.log('Database error ' + err);
});

// Set up the express app
var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _expressValidator2.default)());

app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

app.use((0, _cors2.default)());

app.use('/users', _users2.default);
app.use('/tweets', _tweets2.default);

var port = parseInt(process.env.PORT, 10) || 8080;

app.listen(port, function () {
  console.log('We are live on ' + port);
});

exports.default = app;


app.get('/*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../public/index.html'));
});