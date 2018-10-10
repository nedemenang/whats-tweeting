import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { responseOk, authenticationError } from '../utils/responses';

class CryptCompare {
    static compare(response, password, user) {
        bcrypt.compare(password, user.password, (error, result) => {
            if (error) {
              authenticationError(response, 'Authentication failed');
            }
            if (result) {
              const token = jwt.sign(
                {
                  name: user.name,
                  email: user.email,
                  username: user.username
                },
                process.env.SECRET_KEY,
                {
                  expiresIn: '1h'
                }
              );
              const data = {
                message: 'Authentication successful',
                token
              };
              responseOk(response, data);
            } else {
                authenticationError(response, 'Authentication failed');
            }
          });
      }
}

export default CryptCompare