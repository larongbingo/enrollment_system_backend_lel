import { mockRes, mockReq } from 'sinon-express-mock'; 
import { expect } from 'chai';
import { fake } from 'sinon';
import createError from 'http-errors';
import 'mocha';

import { ErrorHandler } from '../../../src/middlewares/error.handler';

export function ErrorHandlerTest() {

  describe('ErrorHandler Test', function() {

    const req = mockReq();
    const res = mockRes();
    const next = fake();
    const err = createError(404);

    it('should call the res.send function', function(done) {
      ErrorHandler(err, req, res, next);
    
      try { expect(res.send).to.be.called }
      catch(err) { done(err) }

      done();
    });

  });

}