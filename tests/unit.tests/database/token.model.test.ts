import { expect } from 'chai';
import 'mocha';

import { User, UserFields, Token, TokenType, sequelizeInstance, Models } from '../../../src/database';

export function TokenModel() {
  
  describe('Token Model', function() {

    let user_details: UserFields = {
      firstName: 'ASD',
      middleName: 'ASD',
      lastName: 'ASD',
      email: 'ASD@asd.com',
      username: 'asdasdasd',
      password: 'asd',
      address: 'asd',
      guardian: 'asd',
      phoneNumber: 'asd'
    };
    
    // Create a testing user and a testing tokens (CSRF and session)
    before(function(done) {

      this.slow(3500);
      this.timeout(10000);

      (async function() {

        User.create(user_details)
        .then(user => Token.CreateSessionToken(user))
        .then(token => expect(token).to.not.be.null)
        .then(() => Token.CreateCSRFToken())
        .then(token => expect(token).to.not.be.null)
        .then(() => done())
        .catch(done);

      })();

    });

    after(function(done) {

      this.slow(3000);
      this.timeout(10000);

      (async function() {  
        User.findOne({where: {username: user_details.username}})
        .then(user => user!.destroy())

        .then(() => Token.findOne())
        .then(token => token!.destroy())
        
        .then(() => Token.findOne())
        .then(token => token!.destroy())

        .then(() => User.findAll())
        .then(users => expect(users.length).to.be.equal(0))

        .then(() => Token.findAll())
        .then(tokens => expect(tokens.length).to.be.equal(0))

        .then(() => done())
        .catch(done);
      })();

    });

    it('should be able to find the Model at export', function(done) {
      try { expect(Token).to.not.be.null }
      catch(err) { done(err) }

      done();
    });

    // The model actuallly exists and added to the sequelizeInstance
    it('should be able to find the Model at Models Object from ./src/database/index.ts', function(done) {
      try { expect(Models.Token).to.not.be.null }
      catch(err) { done(err) }

      done();
    });

    it('should be able to find the model in sequelizeInstance', function(done) {
      try { expect(sequelizeInstance.models.Token).to.not.be.null }
      catch(err) { done(err) }

      done();
    });

    describe('Spec', function() {
      it('should have userID field', function(done) {
        (async function() {
          Token.findOne({where: {tokenType: TokenType.Session}})
          .then(token => expect(token!.userID).to.not.be.null)
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have tokenType field', function(done) {
        (async function() {
          Token.findOne({where: {tokenType: TokenType.Session}})
          .then(token => expect(token!.tokenType).to.not.be.null)
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have token field', function(done) {
        (async function() {
          Token.findOne({where: {tokenType: TokenType.Session}})
          .then(token => expect(token!.token).to.not.be.null)
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have createdAt timestamp field', function(done) {
        (async function() {
          Token.findOne({where: {tokenType: TokenType.Session}})
          .then(token => expect(token!.createdAt).to.not.be.null)
          .then(() => done())
          .catch(done);
        })();
      });

      it('should have CreateSessionToken method', function(done) {
        try { expect(Token.CreateSessionToken).to.not.be.null }
        catch(err) { done(err) }

        done();
      });

      it('should have ValidateSessionToken method', function(done) {
        try { expect(Token.ValidateSessionToken).to.not.be.null }
        catch(err) { done(err) }

        done();
      });

      it('should have CreateCSRFToken method', function(done) {
        try { expect(Token.CreateCSRFToken).to.not.be.null }
        catch(err) { done(err) }

        done();
      });

    }); // Spec

    describe('Methods', function() {

      describe('CreateSessionToken', function() {
        after(function(done) {
          (async function() {
            Token.findOne({where: {tokenType: TokenType.Session}})
            .then(token => token!.destroy())
            .then(() => done())
            .catch(done);
          })();
        })

        it('should be able to create a session token', function(done) {
          (async function() {
            User.findOne({where: {username: user_details.username}})
            .then(user => Token.CreateSessionToken(user!))
            .then(token => expect(token).to.not.be.null)
            .then(() => done())
            .catch(done);
          })();
        });

        it('should return a null if given a null for user parameter', function(done) {
          (async function() {
            Token.CreateSessionToken(null!)
            .then(token => expect(token).to.be.null)
            .then(() => done())
            .catch(done);
          })();
        });
      });

      describe('CreateCSRFToken', function() {

        after(function(done) {
          (async function() {
            Token.findOne({where: {tokenType: TokenType.CSRF}})
            .then(token => token!.destroy())
            .then(() => done())
            .catch(done);
          })();
        });

        it('should be able to create a CSRF token', function(done) {
          (async function() {
            Token.CreateCSRFToken()
            .then(token => expect(token).to.not.be.null)
            .then(() => done())
            .catch(done);
          })();
        });
      });

      describe('ValidateSessionToken', function() {
  
        it('should return true if given the testing token', function(done) {
          (async function() {
            Token.findOne({where: {tokenType: TokenType.Session}})
            .then(token => Token.ValidateSessionToken(token!.token))
            .then(res => expect(res).to.be.true)
            .then(() => done())
            .catch(done);
          })();
        });

        it('should return false if given an invalid JWT token', function() {
          expect(Token.ValidateSessionToken('ASDASD123123.ASDASD12313.ASDASD123123')).to.be.false
        });

        it('should return false if given a null', function() {
          expect(Token.ValidateSessionToken(null!)).to.be.false
        });
        
        it('should return false if given an empty string', function() {
          expect(Token.ValidateSessionToken('')).to.be.false
        });
      
      });

    }); // Methods

  });

} // TokenModel()