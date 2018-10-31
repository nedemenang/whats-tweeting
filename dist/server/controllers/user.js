'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _responses = require('../utils/responses');

var _cryptCompare = require('../utils/cryptCompare');

var _cryptCompare2 = _interopRequireDefault(_cryptCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: 'register',
    value: function register(request, response, next) {
      var _request$body = request.body,
          name = _request$body.name,
          email = _request$body.email,
          username = _request$body.username,
          password = _request$body.password;

      _user2.default.findOne({ email: email }).exec().then(function (user) {
        if (user) {
          (0, _responses.conflictError)(response, 'Email already exists');
        } else {
          _user2.default.findOne({ username: username }).exec().then(function (user) {
            if (user) {
              (0, _responses.conflictError)(response, 'Username already exists');
            } else {
              _bcrypt2.default.hash(password, 10, function (error, hash) {
                if (error) {
                  (0, _responses.serverError)(response, error);
                } else {
                  var userData = { email: email, name: name, username: username };
                  var newUser = new _user2.default({ name: name, email: email, username: username, password: hash });
                  newUser.save().then(function (result) {
                    var data = {
                      message: 'User created successfully',
                      user: userData
                    };
                    (0, _responses.responseCreateOk)(response, data);
                  }).catch(function (error) {
                    (0, _responses.serverError)(response, error);
                  });
                }
              });
            }
          });
        }
      });
    }
  }, {
    key: 'userById',
    value: function userById(request, response, next) {
      var userId = request.params.userId;

      _user2.default.findById(userId).select('_id name email username queries').exec().then(function (user) {
        var userData = { id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          queries: user.queries };
        (0, _responses.responseOk)(response, { user: userData });
      }).catch(function (error) {
        (0, _responses.serverError)(response, error);
      });
    }
  }, {
    key: 'authenticate',
    value: function authenticate(request, response, next) {
      var _request$body2 = request.body,
          password = _request$body2.password,
          identifier = _request$body2.identifier;

      _user2.default.findOne({ email: identifier }).then(function (user) {
        if (!user) {
          _user2.default.findOne({ username: identifier }).then(function (user) {
            if (!user) {
              (0, _responses.authenticationError)(response, 'Authentication failed');
            } else {
              _cryptCompare2.default.compare(response, password, user);
            }
          });
        } else {
          _cryptCompare2.default.compare(response, password, user);
        }
      });
    }
  }, {
    key: 'passwordReset',
    value: function passwordReset(request, response, next) {
      var _request$body3 = request.body,
          email = _request$body3.email,
          password = _request$body3.password;

      _user2.default.findOne({ email: email }).then(function (user) {
        if (!user) {
          (0, _responses.notFoundError)(response, 'User does not exist');
        } else {
          _bcrypt2.default.hash(password, 10, function (error, hash) {
            if (error) {
              (0, _responses.serverError)(response, error);
            } else {
              user.password = hash;
              user.save().then(function (result) {
                (0, _responses.responseOk)(response, { message: 'user sucessfully updated' });
              }).catch(function (error) {
                (0, _responses.serverError)(response, error);
              });
            }
          });
        }
      });
    }
  }, {
    key: 'delete',
    value: function _delete(request, response, next) {
      _user2.default.remove({ _id: request.params.userId }).then(function (result) {
        (0, _responses.responseOk)(response, { message: 'User deleted' });
      }).catch(function (error) {
        (0, _responses.serverError)(response, error);
      });
    }
  }, {
    key: 'list',
    value: function list(request, response, next) {
      _user2.default.find().select('_id name email username').exec().then(function (docs) {
        var responseData = {
          count: docs.length,
          users: docs.map(function (doc) {
            return {
              id: doc._id,
              name: doc.name,
              username: doc.username,
              email: doc.email
            };
          })
        };
        (0, _responses.responseOk)(response, responseData);
      }).catch(function (error) {
        (0, _responses.serverError)(response, error);
      });
    }
  }]);

  return UserController;
}();

;

exports.default = UserController;