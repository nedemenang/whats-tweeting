'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _twitter = require('../controllers/twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _checkAuthentication = require('../middleware/checkAuthentication');

var _checkAuthentication2 = _interopRequireDefault(_checkAuthentication);

var _queryValidator = require('../middleware/queryValidator');

var _queryValidator2 = _interopRequireDefault(_queryValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/trends/:lat/:long', _checkAuthentication2.default, _queryValidator2.default, _twitter2.default.getTrends);

router.get('/:geocode/', _checkAuthentication2.default, _queryValidator2.default, _twitter2.default.searchTweets);

router.get('/users/:geocode/', _checkAuthentication2.default, _queryValidator2.default, _twitter2.default.searchUsers);

exports.default = router;