import { mockReq, mockRes } from 'sinon-express-mock';
import { expect } from 'chai';
import 'mocha';

import { RequestErrorHandlerCreator } from '../../../src/lib/request.error.handler';

export function RequestErrorHandlerCreatorTest() {

  describe('RequestErrorHandlerCreator Test', function() {

    const req = mockReq();
    const res = mockRes();

    it('should return a function when both parameters are present', function(done) {

      try { expect(typeof RequestErrorHandlerCreator(req, res)).to.be.equal('function') } 
      catch(err) { done(err) }

      done();

    });


    it('should call the res.json function when the returned function was executed', function(done) {

      const testing_err: Error = {
        name: 'testing_err',
        message: 'testing_err'
      };

      RequestErrorHandlerCreator(req, res)!(testing_err);

      try { expect(res.json).to.be.called }
      catch(err) { done(err) }

      done();

    });


    it('should not call the res.json function when the returned function was given a null');


    it('should return null when both parameters are given null', function(done) {

      try { expect(RequestErrorHandlerCreator(null!, null!)).to.be.null } 
      catch(err) { done(err) }

      done();

    });
    
    
    it('should return null when request parameter was given null', function(done) {

      try { expect(RequestErrorHandlerCreator(null!, res)).to.be.null } 
      catch(err) { done(err) }

      done();

    });
    
    
    it('should return null when response parameter was given null', function(done) {

      try { expect(RequestErrorHandlerCreator(req, null!)).to.be.null } 
      catch(err) { done(err) }

      done();

    });

  });

}