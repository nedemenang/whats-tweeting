import User from '../models/user';
import bcrypt from 'bcrypt';
import {conflictError, responseCreateOk, 
    responseOk, serverError, 
    authenticationError,
    notFoundError } from '../utils/responses';
import CryptCompare from '../utils/cryptCompare'

class UserController {
  static register(request, response, next) {
    const { name, email, username, password } = request.body;
    User.findOne({ email})
      .exec()
      .then(user => {
        if (user) {
          conflictError(response, 'Email already exists');
        } else {
          User.findOne({ username })
            .exec()
            .then(user => {
              if (user) {
                conflictError(response, 'Username already exists');
              } else {
                bcrypt.hash(password, 10, (error, hash) => {
                  if (error) {
                    serverError(response, error);
                  } else {
                    const userData = { email, name, username };
                    const newUser = new User({ name, email, username, password: hash });
                    newUser
                      .save()
                      .then(result => {
                        const data = {
                          message: 'User created successfully',
                          user: userData
                        };
                        responseCreateOk(response, data);
                      })
                      .catch(error => {
                        serverError(response, error);
                      });
                  }
                });
              }
            });
        }
      });
  }

  static userById(request, response, next) {
    const { userId } = request.params
    User.findById(userId)
    .select('_id name email username')
    .exec()
    .then(user => {
     const userData = {id: user._id,
                name: user.name,
                username: user.username,
                email: user.email}
        responseOk(response, {user: userData})
    }).catch(error => {
      serverError(response, error)
    })
  }

  static authenticate(request, response, next) {
    const { password, identifier } = request.body;
    User.findOne({ email: identifier }).then(user => {
      if (!user) {
        User.findOne({ username: identifier }).then(user => {
          if (!user) {
            authenticationError(response, 'Authentication failed');
          } else {
            CryptCompare.compare(response, password, user)
          }
        });
      } else {
        CryptCompare.compare(response, password, user)
      }
    });
  }

 static passwordReset(request, response, next) {
    const { email, password } = request.body;
    User.findOne({ email }).then(user => {
      if (!user) {
        notFoundError(response, 'User does not exist');
      } else {
        bcrypt.hash(password, 10, (error, hash) => {
          if (error) {
            serverError(response, error);
          } else {
            user.password = hash;
            user
              .save()
              .then(result => {
                responseOk(response, { message: 'user sucessfully updated' });
              })
              .catch(error => {
                serverError(response, error);
              });
          }
        });
      }
    });
  }

static delete(request, response, next) {
    User.remove({ _id: request.params.userId })
      .then(result => {
        responseOk(response, { message: 'User deleted' });
      })
      .catch(error => {
        serverError(response, error);
      });
  }

static list(request, response, next) {
    User.find()
      .select('_id name email username')
      .exec()
      .then(docs => {
        const responseData = {
          count: docs.length,
          users: docs.map(doc => {
            return {
              id: doc._id,
              name: doc.name,
              username: doc.username,
              email: doc.email
            };
          })
        };
        responseOk(response, responseData);
      })
      .catch(error => {
        serverError(response, error);
      });
  }
};

export default UserController
