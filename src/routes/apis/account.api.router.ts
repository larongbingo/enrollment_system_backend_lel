import { Router } from 'express';

import { RegisterAPIValidator } from '@validators/account.api.router.validators';
import { RequestErrorHandlerCreator } from '@lib/request.error.handler';
import { FailedResponse, SuccessfulResponse } from '@lib/responses'; 
import { ValidationErrorCheck } from '@lib/validation.error.check';
import { User } from '@database';

export const Account_API_Router: Router = Router();

/**
 * Create an account/user
 */
Account_API_Router
.route('/register')
.put(function RegistrationRoute(req, res) {
  
  RegisterAPIValidator(req);

  if(ValidationErrorCheck(req, res)) {
    return;
  }

  (async function AsyncRegistrationRoute() {
    
    return User.IsUsernameUnique(req.body.username)
    .then(async result => {

      // Check if the username is not taken
      if(!result) {
        res.json(new FailedResponse([{message: "Username already taken"}]));
        return;
      }

      
      return User.IsEmailUnique(req.body.email)
      .then(async email => {
        
        // Check if the email is not taken
        if(!email) {
          res.json(new FailedResponse([{message: "Email already taken"}]));
          return;
        }
        
        return User.create(req.body)
        .then(user => {
          res.json(new SuccessfulResponse({ID: user.id}));
        });
      });

    })
    .catch(RequestErrorHandlerCreator(req, res))

  })();

});

/**
 * Log In; sort of read but we can't use
 * the get request because someone might 
 * see the plain text of the password
 */
Account_API_Router
.route('/login')
.post(function(req, res) {
  req.check('username', 'Username is empty').isLength({min: 1});
  req.check('password', 'Password is empty').isLength({min: 1});
});

/**
 * Update an account/user
 */
Account_API_Router
.route('/update')
.post(function(req, res) {
  req.check('newData', 'Invalid JSON').isJSON();
});

/**
 * Delete an account/user
 */
Account_API_Router
.route('/delete')
.delete(function(req, res) {
  
});