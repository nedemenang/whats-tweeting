'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _responses = require('../utils/responses');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CryptCompare = function () {
  function CryptCompare() {
    _classCallCheck(this, CryptCompare);
  }

  _createClass(CryptCompare, null, [{
    key: 'compare',
    value: function compare(response, password, user) {
      _bcrypt2.default.compare(password, user.password, function (error, result) {
        if (error) {
          (0, _responses.authenticationError)(response, 'Authentication failed');
        }
        if (result) {
          var userData = {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username
          };
          var token = _jsonwebtoken2.default.sign({
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username
          }, process.env.SECRET_KEY, {
            expiresIn: '1h'
          });
          var data = {
            message: 'Authentication successful',
            token: token,
            user: userData
          };
          (0, _responses.responseOk)(response, data);
        } else {
          (0, _responses.authenticationError)(response, 'Authentication failed');
        }
      });
    }
  }]);

  return CryptCompare;
}();

exports.default = CryptCompare;