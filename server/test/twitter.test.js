import chai from 'chai';
import faker from 'faker';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import mongoose from 'mongoose';
import 'sinon-mongoose';
import app from '../app';
import User from '../models/user';


const registerDetails = {
    'name': faker.name.findName(),
    'email': faker.internet.email(),
    'username': faker.internet.userName(),
    'password': faker.internet.password()
  };

  const loginDetails = {
    'identifier': registerDetails.email,
    'password': registerDetails.password
  }

  describe('Get tweet route', () => {

    it('it should not allow you to retrieve users for a certain geocode and query if you are not logged in', (done) => { 
            chai.request(app)
            .get('/tweets/6.528769,3.364384,5km/election')
            .end((err, res) => {
                res.should.have.status(401);
                res.body.message.should.equal('Authentication failed');
                done();
            });
    });

    it('it should not allow you to retrieve trends for a certain longitude and latitude if you are not logged in', (done) => { 
        chai.request(app)
        .get('/tweets/trends/-76.191126/43.010907')
        .end((err, res) => {
            res.should.have.status(401);
            res.body.message.should.equal('Authentication failed');
            done();
        });
    });

    it('it should not allow you to retrieve tweets for a certain geocode and query if you are not logged in', (done) => { 
        chai.request(app)
        .get('/tweets/6.528769,3.364384,5km/election')
        .end((err, res) => {
            res.should.have.status(401);
            res.body.message.should.equal('Authentication failed');
            done();
        });
    });

    it('it should Register, Login, retrieve tweets for a certain geocode and query', (done) => { 
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
                    .get('/tweets/6.528769,3.364384,5km/election')
                    .set('authorization', `Bearer ${token}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.an('object');
                        res.body.statuses[0].user.should.be.an('object')
                        res.body.statuses.should.be.an('Array')
                        done();
                    })
              })
          })
        });

        it('it should login, retrieve trends for a certain longitude and latitude', (done) => { 
            chai.request(app)
                .post('/users/login')
                .send(loginDetails)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('token'); 
                    const token = res.body.token; 
                    chai.request(app)
                    .get('/tweets/trends/-76.191126/43.010907')
                    .set('authorization', `Bearer ${token}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.an('object');
                        res.body.trends[0].should.be.an('object')
                        res.body.trends.should.be.an('Array')
                        done();
                    })
                })
            });

            it('it should Login, retrieve users for a certain geocode and query', (done) => { 
                chai.request(app)
                    .post('/users/login')
                    .send(loginDetails)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('token'); 
                        const token = res.body.token; 
                        chai.request(app)
                        .get('/tweets/users/6.528769,3.364384,5km/coding')
                        .set('authorization', `Bearer ${token}`)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.an('object');
                            res.body.users[0].should.be.an('object')
                            res.body.users.should.be.an('Array')
                            done();
                        })
                    })
                })
  });
