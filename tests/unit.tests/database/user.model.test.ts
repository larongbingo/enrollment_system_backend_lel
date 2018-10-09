import { expect } from 'chai';
import 'mocha';

import { User, UserFields, sequelizeInstance, Models } from '../../../src/database';

export function UserModel() {
  // Testing user
  let user_details: UserFields = {
    firstName: 'ASD',
    middleName: 'ASD',
    lastName: 'ASD',
    email: 'ASD@asd.com',
    username: 'asd',
    password: 'asd',
    address: 'asd',
    guardian: 'asd',
    phoneNumber: 'asd'
  };
  
  describe('User Model', function() {
    before(function(done) {
      this.timeout(5000);
      this.slow(2000);

      (async function() {
        User.create(user_details)
        .then(() => done())
        .catch(done);
      })();
    });
    
    after(function(done) {
      this.timeout(5000);
      this.slow(2000);

      (async function() {
        User.findOne({where: { username: user_details.username }})
        .then(user => user!.destroy())
        .then(() => done())
        .catch(done);
      })();
    });

    it('should have created the testing user', function(done) {
      (async function() {
        User.findOne({where: {username: user_details.username}})
        .then(user => expect(user).to.not.be.equal(null))
        .then(() => done())
        .catch(done);
      })();
    });

    it('should be able to find the User Model at export', function(done) {
      try { expect(User).to.not.be.equal(null); }
      catch(err) { done(err) }

      done();
    });

    // The model actuallly exists and added to the sequelizeInstance
    it('should be able to find the User Model at Models Object from ./src/database/index.ts', function(done) {
      try { expect(Models.User).to.not.be.equal(null) }
      catch(err) { done(err) }

      done();
    });

    it('should be able to find the model in sequelizeInstance', function(done) {
      try { expect(sequelizeInstance.models.User).to.not.be.equal(null) }
      catch(err) { done(err) }

      done();
    });

    describe('Spec', function() {
      // It has the User fields
      it('should have id field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.username).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have firstName field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.firstName).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have middleName field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.middleName).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have lastName field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.lastName).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have address field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.address).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have guardian field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.guardian).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have email field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.email).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have phone number field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.phoneNumber).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have username field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.username).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have password field', function(done) {
        (async function() {
          User.findOne({where: {username: user_details.username}})
          .then(user => expect(user!.password).to.not.be.equal(null))
          .then(() => done())
          .catch(done);
        })();
      });

      // It has the login instance function
      it('should have LogIn function', function(done) {
        try { expect(User.LogIn).to.not.be.equal(null) }
        catch(err) { done(err) }+

        done();
      });

      // It has the is username unique function
      it('should have isUsernameUnique function', function(done) {
        try { expect(User.IsUsernameUnique).to.not.be.equal(null) }
        catch(err) { done(err) }

        done();
      });
    }); // Spec Tests

    describe('Methods', function() {

      describe('PasswordHash', function() {
        let user_details_2: UserFields = {
          firstName: 'ASD',
          middleName: 'ASD',
          lastName: 'ASD',
          email: 'ASD@asd.com',
          username: 'asdasd',
          password: 'asd',
          address: 'asd',
          guardian: 'asd',
          phoneNumber: 'asd'
        };
        
        before(function(done) {
          this.timeout(5000);
          this.slow(2000);

          User.create(user_details_2)
          .then(user => expect(user).to.not.be.null)
          .then(() => done())
          .catch(done);
        });

        after(function(done) {
          this.timeout(5000);
          this.slow(2000);

          User.findOne({where: {username: user_details_2.username}})
          .then(user => user!.destroy())
          .then(() => done())
          .catch(done);
        });

        // Check if the hashing function is working
        // Note: Since the hashing function is protected, this is the closest thing for a test
        it('should have a different password when the testing user was created', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(user => expect(user!.password).to.not.be.equal(user_details.password))
            .then(() => done())
            .catch(done);
          })();
        });

        // Needs to create more than 2 accounts with the same password and check if both have the same hash
        it('should have different password when 2 users with the same passwords', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(async user => {
              User.findOne({where: {username: user_details_2.username}})
              .then(user2 => expect(user!.password).to.not.be.equal(user2!.password))
            })
            .then(() => done())
            .catch(done);
          })();
        });

      }); // HashPassword tests

      describe('IsUsernameUnique', function() {
        // Check if the isusernameunique function is working
        it('should return false if passed the same username', function(done) {
          (async function() {
            User.IsUsernameUnique(user_details.username)
            .then(res => expect(res).to.be.equal(false))
            .then(() => done())
            .catch(done);
          })();
        });

        it('should return false if passed null', function(done) {
          (async function() {
            User.IsUsernameUnique(null!)
            .then(res => expect(res).to.be.equal(false))
            .then(() => done())
            .catch(done);
          })();
        });

        it('should return false if passed empty string or ""', function(done) {
          (async function() {
            User.IsUsernameUnique("")
            .then(res => expect(res).to.be.equal(false))
            .then(() => done())
            .catch(done);
          })();
        });

        it('should return true if passed with special characters and numbers', function(done) {
          (async function() {
            User.IsUsernameUnique('ASD123!@#')
            .then(res => expect(res).to.be.equal(true))
            .then(() => done())
            .catch(done);
          })();
        })

        it('should return true if passed same username as all capital letters', function(done) {
          (async function() {
            User.IsUsernameUnique(user_details.username.toUpperCase())
            .then(res => expect(res).to.be.equal(true))
            .then(() => done())
            .catch(done);
          })();
        });

        it('should return true if passed modified username', function(done) {
          (async function() {
            User.IsUsernameUnique(user_details.username + 'a')
            .then(res => expect(res).to.be.equal(true))
            .then(() => done())
            .catch(done);
          })();
        });
      }); // IsUsernameUnique Tests

      describe('LogIn', function() {

        // Check if the LogIn function is working
        it('should return true if we passed the same account and same password', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(user => User.LogIn(user_details.password, user!))
            .then(res => expect(res).to.be.equal(true))
            .then(() => done())
            .catch(done)
          })();
        });

        it('should return false if passed null and same password', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(user => User.LogIn(null!, user!))
            .then(res => expect(res).to.be.equal(false))
            .then(() => done())
            .catch(done)
          })();
        });

        it('should return false if passed same user instance and null', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(user => User.LogIn(user_details.password, null!))
            .then(res => expect(res).to.be.equal(false))
            .then(() => done())
            .catch(done)
          })();
        });

        it('should return false if passed null on both user instance and password', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(() => User.LogIn(null!, null!))
            .then(res => expect(res).to.be.equal(false))
            .then(() => done())
            .catch(done)
          })();
        });

        it('should return false if passed with different password', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(user => User.LogIn(user_details.password + 'asdasdasd', user!))
            .then(res => expect(res).to.be.equal(false))
            .then(() => done())
            .catch(done)
          })();
        });

        it('should return false if passed with empty string for password', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(user => User.LogIn("", user!))
            .then(res => expect(res).to.be.equal(false))
            .then(() => done())
            .catch(done)
          })();
        });

      }); // LogIn Tests

    });

  });

} // UserModel()