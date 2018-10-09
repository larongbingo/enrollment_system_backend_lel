import { expect } from 'chai';
import 'mocha';

import { Log, Models, sequelizeInstance, LogFields, HttpMethod } from '../../../src/database';

export function LogModel() {

  let testing_log: LogFields = {
    userID: "ASDASDASDASD",
    requestIP: '127.0.0.1',
    route: '/asd',
    responseJSON: JSON.stringify({asd: 'asd'}),
    requestJSON: JSON.stringify({}),
    success: true,
    httpMethod: HttpMethod.GET,
    remark: 'This is a testing log'
  };

  describe('Log Model', function() {

    it('should be able to find the Model at export', function(done) {
      
      try { expect(Log).to.not.be.null }
      catch(err) { done(err) }

      done();

    });

    it('should be able to find the Model at Models Object from ./src/database/index.ts', function(done) {

      try { expect(Models.Log).to.not.be.null }
      catch(err) { done(err) }

      done();

    });

    it('should be able to find the model in sequelizeInstance', function(done) {

      try { expect(sequelizeInstance.models.Log).to.not.be.null }
      catch(err) { done(err) }

      done();

    });
  
    describe('Spec', function() {

      before(function(done) {

        (async function() {

          Log.create(testing_log)
          .then(() => done())
          .catch(done)

        })();

      });
  
      after(function(done) {

        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => log!.destroy())
          .then(() => Log.findAll())
          .then(logs => expect(logs.length).to.be.equal(0))
          .then(() => done())
          .catch(done);

        })();

      });

      it('should have a field that dictates who initiated the request', function(done) {

        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => expect(log!.userID).to.not.be.null)
          .then(() => done())
          .catch(done);
        })();

      });

      it('should have a field that dictates whos IP was used to send the request', function(done) {

        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => expect(log!.requestIP).to.not.be.null)
          .then(() => done())
          .catch(done);

        })();

      });

      it('should have a field that dictates what route accepted the request', function(done) {

        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => expect(log!.route).to.not.be.null)
          .then(() => done())
          .catch(done);

        })();

      });


      it('should have a field that dictates what response was sent to the request', function(done) {

        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => expect(log!.responseJSON).to.not.be.null)
          .then(() => done())
          .catch(done);

        })();

      });

      it('should have a field that dictates what parameters was sent with the request', function(done) {

        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => expect(log!.requestJSON).to.not.be.null)
          .then(() => done())
          .catch(done);

        })();

      });

      it('should have a field that dictates when the request was sent', function(done) {
        
        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => expect(log!.createdAt).to.not.be.null)
          .then(() => done())
          .catch(done);

        })();

      });

      it('should have a field that dictates the HTTP request type', function(done) {

        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => expect(log!.httpMethod).to.not.be.null)
          .then(() => done())
          .catch(done);

        })();

      });

      it('should have a field that dictates if the request was successfully processed', function(done) {

        (async function() {

          Log.findOne({where: {userID: testing_log.userID}})
          .then(log => expect(log!.route).to.not.be.null)
          .then(() => done())
          .catch(done);

        })();

      });

    });

  });

}