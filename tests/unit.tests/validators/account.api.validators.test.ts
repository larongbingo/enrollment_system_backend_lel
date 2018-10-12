import expressValidator from 'express-validator';
import { mockReq } from 'sinon-express-mock';
import { expect } from 'chai';
import 'mocha';

export function AccountAPIValidatorsTest() {
  
  describe('AccountAPIValidators Test', function() {
  
    describe('RegisterAPIValidator', function() {

      const req = mockReq(expressValidator());
      
      req.body = {
        firstName: 'asd',
        middleName: 'asd',
        lastName: 'asd',
        guardian: 'asd',
        address: 'asd',
        email: 'asd@asd.asd',
        phoneNumber: '9297',
        username: 'asd',
        password: 'asd',
        confirmPassword: 'asd'
      };

      it('should create an error that the firstName is empty');

      
      it('should create an error that the middleName is empty');


      it('should create an error that the lastName is empty');


      it('should create an error that the guardian is empty');


      it('should create an error that the address is empty');


      it('should create an error that the email is empty');


      it('should create an error that the phoneNumber is empty');


      it('should create an error that the username is empty');


      it('should create an error that the password is empty');


      it('should create an error that the confirmPassword is empty');


      it('should create an error that the confirmPassword is not equal to password');

      
      it('should create an error that the email is not valid');

    });

  });

}