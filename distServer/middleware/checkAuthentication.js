'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _jsonwebtoken = require('jsonwebtoken');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.load();

exports.default = function (req, res, next) {
  try {

    var token = req.headers.authorization.split(' ')[1];

    var decoded = (0, _jsonwebtoken.verify)(token, process.env.SECRET_KEY);

    req.userData = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authentication failed'
    });
  }
};