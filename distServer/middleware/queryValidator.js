'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var QueryValidator = function QueryValidator(request, response, next) {
  Object.keys(request.params).forEach(function (key) {
    switch (key) {
      case 'lat':
        request.check('lat', 'Please provide lattitude').notEmpty();
        break;
      case 'long':
        request.check('long', 'Please provide longitude').notEmpty();
        break;
      case 'geocode':
        request.check('geocode', 'Please provide geocode').notEmpty();
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

exports.default = QueryValidator;