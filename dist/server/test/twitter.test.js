'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('sinon-mongoose');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerDetails = {
    'name': _faker2.default.name.findName(),
    'email': _faker2.default.internet.email(),
    'username': _faker2.default.internet.userName(),
    'password': _faker2.default.internet.password()
};

var loginDetails = {
    'identifier': registerDetails.email,
    'password': registerDetails.password
};

describe('Get tweet route', function () {

    it('it should not allow you to retrieve users for a certain geocode and query if you are not logged in', function (done) {
        _chai2.default.request(_app2.default).get('/tweets/6.528769,3.364384,5km').end(function (err, res) {
            res.should.have.status(401);
            res.body.message.should.equal('Authentication failed');
            done();
        });
    });

    it('it should not allow you to retrieve trends for a certain longitude and latitude if you are not logged in', function (done) {
        _chai2.default.request(_app2.default).get('/tweets/trends/-76.191126/43.010907').end(function (err, res) {
            res.should.have.status(401);
            res.body.message.should.equal('Authentication failed');
            done();
        });
    });

    it('it should not allow you to retrieve tweets for a certain geocode and query if you are not logged in', function (done) {
        _chai2.default.request(_app2.default).get('/tweets/6.528769,3.364384,5km').end(function (err, res) {
            res.should.have.status(401);
            res.body.message.should.equal('Authentication failed');
            done();
        });
    });

    it('it should Register, Login, retrieve tweets for a certain geocode and query', function (done) {
        _chai2.default.request(_app2.default).post('/users').send(registerDetails).end(function (err, res) {
            res.should.have.status(201);
            _chai2.default.request(_app2.default).post('/users/login').send(loginDetails).end(function (err, res) {
                res.should.have.status(200);
                res.body.data.should.have.property('token');
                var token = res.body.data.token;
                _chai2.default.request(_app2.default).get('/tweets/6.528769,3.364384,5km').set('authorization', 'Bearer ' + token).end(function (err, res) {
                    res.should.have.status(200);
                    res.body.data.should.be.an('object');
                    res.body.data.statuses[0].user.should.be.an('object');
                    res.body.data.statuses.should.be.an('Array');
                    done();
                });
            });
        });
    });

    it('it should login, retrieve trends for a certain longitude and latitude', function (done) {
        _chai2.default.request(_app2.default).post('/users/login').send(loginDetails).end(function (err, res) {
            res.should.have.status(200);
            res.body.data.should.have.property('token');
            var token = res.body.data.token;
            _chai2.default.request(_app2.default).get('/tweets/trends/-76.191126/43.010907').set('authorization', 'Bearer ' + token).end(function (err, res) {
                res.should.have.status(200);
                res.body.data.should.be.an('object');
                res.body.data.trends[0].should.be.an('object');
                res.body.data.trends.should.be.an('Array');
                done();
            });
        });
    });

    it('it should Login, retrieve users for a certain geocode and query', function (done) {
        _chai2.default.request(_app2.default).post('/users/login').send(loginDetails).end(function (err, res) {
            res.should.have.status(200);
            res.body.data.should.have.property('token');
            var token = res.body.data.token;
            _chai2.default.request(_app2.default).get('/tweets/users/6.528769,3.364384,5km').set('authorization', 'Bearer ' + token).end(function (err, res) {
                res.should.have.status(200);
                res.body.data.should.be.an('object');
                res.body.data.users[0].should.be.an('object');
                res.body.data.users.should.be.an('Array');
                done();
            });
        });
    });
});