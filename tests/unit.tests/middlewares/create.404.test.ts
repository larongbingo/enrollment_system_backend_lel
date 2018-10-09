import { mockReq, mockRes } from 'sinon-express-mock';
import { expect } from 'chai';
import { fake } from 'sinon';
import 'mocha';

import { Create404 } from '../../../src/middlewares/create.404';

export function Create404Test() {

  describe('Create404 Test', function() {

    const req = mockReq();
    const res = mockRes();
    const next = fake();

    it('should call the next function', function(done) {
      Create404(req, res, next);

      try { expect(next).to.be.called }
      catch(err) { done(err) }
      
      done();
    });    

  });

}