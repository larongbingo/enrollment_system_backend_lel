import { Request } from 'express';

export function RegisterAPIValidator(req: Request) {
  req.check('firstName', 'First Name is empty').isLength({min: 1});
  req.check('middleName', 'Middle Name is empty').isLength({min: 1});
  req.check('lastName', 'Last Name is empty').isLength({min: 1});
  req.check('guardian', 'Guardian is empty').isLength({min: 1});
  req.check('address', 'Address is empty').isLength({min: 1});
  req.check('email', 'Email is empty').isLength({min: 1});
  req.check('phoneNumber', 'Phone Number is empty').isLength({min: 1});
  req.check('username', 'Username is empty').isLength({min: 1});  
  req.check('confirmPassword', 'Confirm Password is empty').isLength({min: 1});
  req.check('password', 'Password is empty').isLength({min: 1}).equals(req.body.confirmPassword);
  req.check('email', 'Email is not valid').isEmail();
}