import { Request } from 'express';

export function RegisterAPIValidator(req: Request) {
  req.check('firstName', 'First Name is empty').notEmpty();
  req.check('middleName', 'Middle Name is empty').notEmpty();
  req.check('lastName', 'Last Name is empty').notEmpty();
  req.check('guardian', 'Guardian is empty').notEmpty();
  req.check('address', 'Address is empty').notEmpty();
  req.check('email', 'Email is empty').notEmpty();
  req.check('phoneNumber', 'Phone Number is empty').notEmpty();
  req.check('username', 'Username is empty').notEmpty();  
  req.check('confirmPassword', 'Confirm Password is empty').notEmpty();
  req.check('password', 'Password is empty').notEmpty();

  req.check('password', 'Password does not match with Confirm Password').equals(req.body.confirmPassword);
  req.check('email', 'Email is not valid').isEmail();
}