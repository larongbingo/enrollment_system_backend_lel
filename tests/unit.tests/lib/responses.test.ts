import { expect } from 'chai';
import 'mocha';

import { Response, FailedResponse, SuccessfulResponse } from '../../../src/lib/responses';

export function ResponsesTest() {
  
  describe('Responses', function() {

    describe('Response Class', function() {

      let testing_response: Response = new Response('testing', true);

      it('should have a field that dictates when the response was sent', function(done) {
        
        try { expect(testing_response.iat).to.not.be.null }
        catch(err) { done(err) }

        done();

      });

      it('should have a field that dictates whether the request was successfully processed or not', function(done) {
        
        try { expect(testing_response.success).to.not.be.null }
        catch(err) { done(err) }

        done();

      });

      it('should have a field that holds the response data or message', function(done) {
        
        try { expect(testing_response.payload).to.not.be.null }
        catch(err) { done(err) }

        done();

      });

    });

    describe('FailedResponse Class', function() {

      let testing_response: FailedResponse = new FailedResponse('testing');

      it('should have a field that holds a value false', function(done) {
        
        try { expect(testing_response.success).to.be.false }
        catch(err) { done(err) }

        done();

      });

    });

    describe('SuccesfulReponse Class', function() {

      let testing_response: SuccessfulResponse = new SuccessfulResponse('testing');
      
      it('should have a field that holds a value true', function(done) {
        
        try { expect(testing_response.success).to.be.true }
        catch(err) { done(err) }

        done();

      });

    });

  });

}