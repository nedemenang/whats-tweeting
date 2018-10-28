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

_chai2.default.should();

_chai2.default.use(_chaiHttp2.default);
var expect = _chai2.default.expect;

var registerDetails = {
  'name': _faker2.default.name.findName(),
  'email': _faker2.default.internet.email(),
  'username': _faker2.default.internet.userName(),
  'password': _faker2.default.internet.password()
};

var resetPasswordDetails = {
  'name': _faker2.default.name.findName(),
  'email': _faker2.default.internet.email(),
  'username': _faker2.default.internet.userName(),
  'password': _faker2.default.internet.password()
};

var resetPassword = {
  'email': resetPasswordDetails.email,
  'password': resetPasswordDetails.password
};

var loginDetails = {
  'identifier': registerDetails.email,
  'password': registerDetails.password
};

describe('Create user route', function () {

  it('it should Register, Login, and check token', function (done) {
    _chai2.default.request(_app2.default).post('/users').send(registerDetails).end(function (err, res) {
      res.should.have.status(201);
      _chai2.default.request(_app2.default).post('/users/login').send(loginDetails).end(function (err, res) {
        res.should.have.status(200);
        res.body.data.should.have.property('token');
        var token = res.body.data.token;
        _chai2.default.request(_app2.default).get('/users').set('authorization', 'Bearer ' + token).end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.an('object');
          done();
        });
      });
    });
  });

  it('should return 400 invalid email', function (done) {
    _chai2.default.request(_app2.default).post('/users').send({
      email: 'invalidemail',
      name: _faker2.default.name.findName(),
      username: _faker2.default.internet.userName(),
      password: _faker2.default.internet.password()
    }).end(function (err, res) {
      res.status.should.equal(400);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.message.should.equal('Please insert a valid email address');
      done();
    });
  });

  it('should return 400 empty email', function (done) {
    _chai2.default.request(_app2.default).post('/users').send({
      email: '',
      name: _faker2.default.name.findName(),
      username: _faker2.default.internet.userName(),
      password: _faker2.default.internet.password()
    }).end(function (err, res) {
      res.status.should.equal(400);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.message.should.equal('Please provide email');
      done();
    });
  });

  it('should return 400 empty password', function (done) {
    _chai2.default.request(_app2.default).post('/users').send({
      email: _faker2.default.internet.email(),
      name: '',
      username: _faker2.default.internet.userName(),
      password: _faker2.default.internet.password()
    }).end(function (err, res) {
      res.status.should.equal(400);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.message.should.equal('Please provide a name');
      done();
    });
  });

  it('should return 400 empty username', function (done) {
    _chai2.default.request(_app2.default).post('/users').send({
      email: _faker2.default.internet.email(),
      name: _faker2.default.name.findName(),
      username: '',
      password: _faker2.default.internet.password()
    }).end(function (err, res) {
      res.status.should.equal(400);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.message.should.equal('Please provide username');
      done();
    });
  });

  it('should return 400 empty password', function (done) {
    _chai2.default.request(_app2.default).post('/users').send({
      email: _faker2.default.internet.email,
      name: _faker2.default.name.findName(),
      username: _faker2.default.internet.userName(),
      password: ''
    }).end(function (err, res) {
      res.status.should.equal(400);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.message.should.equal('Please provide a password');
      done();
    });
  });
});

describe('User model', function () {
  it("should return all users", function (done) {
    var userMock = _sinon2.default.mock(_user2.default);
    var expectedResult = { status: true, users: [] };
    userMock.expects('find').yields(null, expectedResult);
    _user2.default.find(function (err, result) {
      userMock.verify();
      userMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  // Test will pass if we fail to get users
  it("should return error", function (done) {
    var userMock = _sinon2.default.mock(_user2.default);
    var expectedResult = { status: false, error: "Something went wrong" };
    userMock.expects('find').yields(expectedResult, null);
    _user2.default.find(function (err, result) {
      userMock.verify();
      userMock.restore();
      expect(err.status).to.not.be.true;
      done();
    });
  });

  it("should create new user", function (done) {
    var userMock = _sinon2.default.mock(new _user2.default({
      name: _faker2.default.name.findName(),
      username: _faker2.default.internet.userName(),
      password: _faker2.default.internet.password(),
      email: _faker2.default.internet.email() }));
    var user = userMock.object;
    var expectedResult = { status: true };
    userMock.expects('save').yields(null, expectedResult);
    user.save(function (err, result) {
      userMock.verify();
      userMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should return error, if post not saved", function (done) {
    var userMock = _sinon2.default.mock(new _user2.default({
      name: _faker2.default.name.findName(),
      username: _faker2.default.internet.userName(),
      password: _faker2.default.internet.password(),
      email: _faker2.default.internet.email() }));
    var user = userMock.object;
    var expectedResult = { status: false };
    userMock.expects('save').yields(null, expectedResult);
    user.save(function (err, result) {
      userMock.verify();
      userMock.restore();
      expect(result.status).to.not.be.true;
      done();
    });
  });
});

describe('Password reset route', function () {
  it('it should return 200 ok', function (done) {
    _chai2.default.request(_app2.default).post('/users').send(resetPasswordDetails).end(function (err, res) {
      res.should.have.status(201);
      _chai2.default.request(_app2.default).post('/users/reset').send(resetPassword).end(function (err, res) {
        res.should.have.status(200);
        res.body.data.should.have.property('message');
        res.body.data.message.should.equal('user sucessfully updated');
        done();
      });
    });
  });
});

describe('Get single user route', function () {
  it('it should login, list, and get', function (done) {
    _chai2.default.request(_app2.default).post('/users/login').send(loginDetails).end(function (err, res) {
      res.should.have.status(200);
      var token = res.body.data.token;
      _chai2.default.request(_app2.default).get('/users').set('authorization', 'Bearer ' + token).end(function (err, res) {
        res.should.have.status(200);
        var user = res.body.data.users[1];
        _chai2.default.request(_app2.default).get('/users/' + user.id).set('authorization', 'Bearer ' + token).end(function (err, res) {

          res.should.have.status(200);
          res.body.data.should.be.an('object');
          res.body.data.user.id.should.equal(user.id);
          done();
        });
      });
    });
  });
});

describe('Delete user route', function () {
  it('it should login, get, and delete', function (done) {
    _chai2.default.request(_app2.default).post('/users/login').send(loginDetails).end(function (err, res) {
      res.should.have.status(200);
      var token = res.body.data.token;
      _chai2.default.request(_app2.default).get('/users').set('authorization', 'Bearer ' + token).end(function (err, res) {
        res.should.have.status(200);
        var user = res.body.data.users[0];
        _chai2.default.request(_app2.default).delete('/users/' + user.id).set('authorization', 'Bearer ' + token).end(function (err, res) {
          res.should.have.status(200);
          res.body.data.should.be.an('object');
          res.body.data.should.have.property('message');
          res.body.data.message.should.equal('User deleted');
          done();
        });
      });
    });
  });
});