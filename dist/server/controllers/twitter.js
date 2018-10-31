'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _twit = require('twit');

var _twit2 = _interopRequireDefault(_twit);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _responses = require('../utils/responses');

var _util = require('util');

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.load();

var tweeter = new _twit2.default({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
    strictSSL: true
});

var TwitterController = function () {
    function TwitterController() {
        _classCallCheck(this, TwitterController);
    }

    _createClass(TwitterController, null, [{
        key: 'getTrends',
        value: function getTrends(request, response, next) {
            var _request$params = request.params,
                long = _request$params.long,
                lat = _request$params.lat;
            var email = request.userData.email;

            tweeter.get('trends/closest', { lat: lat, long: long }, function (err, data, res) {
                if (err) {
                    (0, _responses.serverError)(response, err);
                } else {
                    var id = data[0].woeid;
                    tweeter.get('trends/place', { id: id }, function (err2, data2, res2) {
                        if (err2) {
                            (0, _responses.serverError)(response, err2);
                        } else {
                            var responseData = {
                                count: data2[0].trends.length,
                                trends: data2[0].trends.map(function (record) {
                                    return {
                                        name: record.name,
                                        url: record.url,
                                        promotedContent: record.promoted_content,
                                        query: record.query,
                                        tweetVolume: record.tweet_volume
                                    };
                                })
                            };
                            _user2.default.findOne({ email: email }).exec().then(function (user) {
                                if (user) {
                                    var query = { longitude: long, latitude: lat };
                                    user.queries.push(query);
                                    user.save();
                                } else {
                                    (0, _responses.serverError)(response, "User does not exist");
                                }
                            });
                            (0, _responses.responseOk)(response, responseData);
                        }
                    });
                }
            });
        }
    }, {
        key: 'searchTweets',
        value: function searchTweets(request, response, next) {
            var geocode = request.params.geocode;
            var email = request.userData.email;

            tweeter.get('search/tweets', { q: 'geocode:' + geocode, count: 100 }, function (error, data, res) {
                if (error) {
                    (0, _responses.serverError)(response, error);
                } else {
                    var responseData = {
                        count: data.statuses.length,
                        statuses: data.statuses.map(function (record) {
                            var userData = {
                                id: record.user.id_str,
                                name: record.user.name,
                                screenName: record.user.screen_name,
                                location: record.user.location,
                                description: record.user.description,
                                url: record.user.url,
                                profileImage: record.user.profile_image_url_https
                            };
                            return {
                                id: record.id,
                                idString: record.id_str,
                                text: record.text,
                                user: userData,
                                createdAt: record.created_at,
                                urls: record.entities.urls

                            };
                        })
                    };

                    _user2.default.findOne({ email: email }).exec().then(function (user) {
                        if (user) {
                            var query = { query: geocode };
                            user.queries.push(query);
                            user.save();
                        } else {
                            (0, _responses.serverError)(response, "User does not exist");
                        }
                    });
                    (0, _responses.responseOk)(response, responseData);
                }
            });
        }
    }, {
        key: 'searchUsers',
        value: function searchUsers(request, response, next) {
            var geocode = request.params.geocode;
            var email = request.userData.email;

            tweeter.get('search/tweets', { q: 'geocode:' + geocode, count: 100 }, function (error, data, res) {
                if (error) {
                    (0, _responses.serverError)(response, error);
                } else {
                    var responseData = {
                        count: data.statuses.length,
                        users: data.statuses.map(function (record) {
                            return {
                                id: record.user.id_str,
                                name: record.user.name,
                                screenName: record.user.screen_name,
                                location: record.user.location,
                                description: record.user.description,
                                url: record.user.url,
                                profileImage: record.user.profile_image_url_https
                            };
                        })
                    };
                    _user2.default.findOne({ email: email }).exec().then(function (user) {
                        if (user) {
                            var query = { query: geocode };
                            user.queries.push(query);
                            user.save();
                        } else {
                            (0, _responses.serverError)(response, "User does not exist");
                        }
                    });
                    (0, _responses.responseOk)(response, responseData);
                }
            });
        }
    }]);

    return TwitterController;
}();

exports.default = TwitterController;