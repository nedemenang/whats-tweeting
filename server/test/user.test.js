import chai from 'chai';
import faker from 'faker';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import mongoose from 'mongoose';
import 'sinon-mongoose';
import app from '../app';
import User from '../models/user';


chai.should();

chai.use(chaiHttp);
const expect = chai.expect;

const registerDetails = {
    'name': faker.name.findName(),
    'email': faker.internet.email(),
    'username': faker.internet.userName(),
    'password': faker.internet.password()
  };

const resetPasswordDetails = {
    'name': faker.name.findName(),
    'email': faker.internet.email(),
    'username': faker.internet.userName(),
    'password': faker.internet.password()
}

const resetPassword = {
    'email': resetPasswordDetails.email,
    'password': resetPasswordDetails.password
}

const loginDetails = {
    'identifier': registerDetails.email,
    'password': registerDetails.password
  }


  
describe('Create user route', () => {

    it('it should Register, Login, and check token', (done) => {
        chai.request(app)
          .post('/users')
          .send(registerDetails)
          .end((err, res) => { 
            res.should.have.status(201);   
            chai.request(app)
              .post('/users/login')
              .send(loginDetails)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('token'); 
                const token = res.body.token;
                chai.request(app)
                  .get('/users')
                  .set('authorization', `Bearer ${token}`)
                  .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    done();
                   })
              })
   
          })
    });
    
    it('should return 400 invalid email', (done) => {
      chai.request(app)
      .post('/users')
      .send({
        email: 'invalidemail',
        name: faker.name.findName(),
        username: faker.internet.userName(),
        password: faker.internet.password()
      })
      .end((err, res) => {
        res.status.should.equal(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should
        .equal('Please insert a valid email address');
        done();
      });
    });

    it('should return 400 empty email', (done) => {
        chai.request(app)
        .post('/users')
        .send({
          email: '',
          name: faker.name.findName(),
          username: faker.internet.userName(),
          password: faker.internet.password()
        })
        .end((err, res) => {
          res.status.should.equal(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should
          .equal('Please provide email');
          done();
        });
      });

      it('should return 400 empty password', (done) => {
        chai.request(app)
        .post('/users')
        .send({
          email: faker.internet.email(),
          name: '',
          username: faker.internet.userName(),
          password: faker.internet.password()
        })
        .end((err, res) => {
          res.status.should.equal(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should
          .equal('Please provide a name');
          done();
        });
      });

      it('should return 400 empty username', (done) => {
        chai.request(app)
        .post('/users')
        .send({
          email: faker.internet.email(),
          name: faker.name.findName(),
          username: '',
          password: faker.internet.password()
        })
        .end((err, res) => {
          res.status.should.equal(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should
          .equal('Please provide username');
          done();
        });
      });

      it('should return 400 empty password', (done) => {
        chai.request(app)
        .post('/users')
        .send({
          email: faker.internet.email,
          name: faker.name.findName(),
          username: faker.internet.userName(),
          password: ''
        })
        .end((err, res) => {
          res.status.should.equal(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.message.should
          .equal('Please provide a password');
          done();
        });
      });
  });


  describe('User model', () => {
    it("should return all users", (done) => {
        const userMock = sinon.mock(User);
        const expectedResult = {status: true, users: []};
        userMock.expects('find').yields(null, expectedResult);
        User.find((err, result) => {
            userMock.verify();
            userMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Test will pass if we fail to get users
    it("should return error", (done) => {
        const userMock = sinon.mock(User);
        const expectedResult = {status: false, error: "Something went wrong"};
        userMock.expects('find').yields(expectedResult, null);
        User.find((err, result) => {
            userMock.verify();
            userMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });

    it("should create new user", (done) => {
        const userMock = sinon.mock(new User({ 
                    name: faker.name.findName(),
                    username: faker.internet.userName(),
                    password: faker.internet.password(),
                    email: faker.internet.email()}));
        const user = userMock.object;
        const expectedResult = { status: true };
        userMock.expects('save').yields(null, expectedResult);
        user.save((err, result) => {
            userMock.verify();
            userMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    it("should return error, if post not saved", (done) => {
        const userMock = sinon.mock(new User({ 
                    name: faker.name.findName(),
                    username: faker.internet.userName(),
                    password: faker.internet.password(),
                    email: faker.internet.email()}));
        const user = userMock.object;
        const expectedResult = { status: false };
        userMock.expects('save').yields(null, expectedResult);
        user.save((err, result) => {
            userMock.verify();
            userMock.restore();
            expect(result.status).to.not.be.true;
            done();
        });
    });
  });

  describe ('Password reset route', () => {
    it('it should return 200 ok', (done) => {
        chai.request(app)
          .post('/users')
          .send(resetPasswordDetails)
          .end((err, res) => { 
            res.should.have.status(201);   
            chai.request(app)
              .post('/users/reset')
              .send(resetPassword)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('message'); 
                res.body.message.should
                    .equal('user sucessfully updated');
                done();
              });
          });
    });
});

describe ('Get single user route', () => {
  it('it should login, list, and get', (done) => {
      chai.request(app)
        .post('/users/login')
        .send(loginDetails)
        .end((err, res) => { 
          res.should.have.status(200);
          const token = res.body.token;   
          chai.request(app)
            .get('/users')
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
              res.should.have.status(200);
              const user = res.body.users[1];
              chai.request(app)
                .get(`/users/${user.id}`)
                .set('authorization', `Bearer ${token}`)
                .end((err, res) => {
                  // console.log(err)
                  res.should.have.status(200);
                  res.body.should.be.an('object');
                  res.body.user.id.should
                       .equal(user.id);
                  done();
                 })
            })
 
        })
  });
});

describe ('Delete user route', () => {
    it('it should login, get, and delete', (done) => {
        chai.request(app)
          .post('/users/login')
          .send(loginDetails)
          .end((err, res) => { 
            res.should.have.status(200);
            const token = res.body.token;   
            chai.request(app)
              .get('/users')
              .set('authorization', `Bearer ${token}`)
              .end((err, res) => {
                res.should.have.status(200);
                const user = res.body.users[0];
                chai.request(app)
                  .delete(`/users/${user.id}`)
                  .set('authorization', `Bearer ${token}`)
                  .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message'); 
                    res.body.message.should
                        .equal('User deleted');
                    done();
                   })
              })
   
          })
    });
});
