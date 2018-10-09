import { sequelizeInstance } from '../../../src/database';

import { UserModel } from './user.model.test';
import { TokenModel } from './token.model.test';
import { LogModel } from './log.model.test';

export function RootDatabaseUnitTest() {
  describe('Database Tests', function() {
    describe('Sequelize-MySQL Server Connection', function() {
      it('should be able to authenticate with the MySQL Server', function(done) {
        this.timeout(10000);
        this.slow(3500);

        (async function() {
          sequelizeInstance
          .authenticate()
          .then(() => done())
          .catch(done);
        })();
      });
      
      it('should be able to forcefully sync the tables', function(done) {
        this.timeout(5000);
        this.slow(3500);

        (async function() {
          sequelizeInstance
          .sync({force: true})
          .then(() => done())
          .catch(done);
        })();
      });
    });

    UserModel();
    TokenModel();
    LogModel();
  });
}