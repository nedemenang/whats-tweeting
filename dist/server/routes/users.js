'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

var _checkAuthentication = require('../middleware/checkAuthentication');

var _checkAuthentication2 = _interopRequireDefault(_checkAuthentication);

var _validator = require('../middleware/validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/', _validator2.default, _user2.default.register);

router.post('/login', _user2.default.authenticate);

router.delete('/:userId', _checkAuthentication2.default, _user2.default.delete);

router.post('/reset', _user2.default.passwordReset);

router.get('/', _checkAuthentication2.default, _user2.default.list);

router.get('/:userId', _checkAuthentication2.default, _user2.default.userById);

exports.default = router;