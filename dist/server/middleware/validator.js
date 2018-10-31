'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Validator = function Validator(request, response, next) {
  Object.keys(request.body).forEach(function (key) {
    switch (key) {
      case 'email':
        request.check('email', 'Please provide email').notEmpty();
        request.check('email', 'Please insert a valid email address').isEmail();
        break;
      case 'username':
        request.check('username', 'Please provide username').notEmpty();
        break;
      case 'password':
        request.check('password', 'Please provide a password').notEmpty();
        break;
      case 'name':
        request.check('name', 'Please provide a name').notEmpty();
        break;
      default:
        break;
    }
  });
  var errors = request.validationErrors();
  if (errors) {
    var message = errors[0].msg;
    response.status(400).send({ message: message });
  } else {
    next();
  }
};

exports.default = Validator;