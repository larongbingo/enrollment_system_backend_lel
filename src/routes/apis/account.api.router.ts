import { Strategy } from 'passport-local';
import { Router } from 'express';
import passport from 'passport';

import { RegisterAPIValidator } from '@validators/account.api.router.validators';
import { RequestErrorHandlerCreator } from '@lib/request.error.handler';
import { FailedResponse, SuccessfulResponse } from '@lib/responses'; 
import { ValidationErrorCheck } from '@lib/validation.error.check';
import { PassportLocalStrategy } from '@lib/passport.local.strategy';
import { User } from '@database';

export const Account_API_Router: Router = Router();

passport.use(new Strategy(PassportLocalStrategy));

passport.serializeUser(function(user: User, done) {
  return done(null, user.id);
});

passport.deserializeUser(function(id: string, done) {
  return User.findById(id)
  .then(user => done(null, user!))
  .catch(err => done(err));
});

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
.post(
  passport.authenticate('local'),
  function(req, res) {
    
  }
);

/**
 * Log Out
 */
Account_API_Router
.route('/logout')
.get(function(req, res) {
  req.logout();
  res.json(new SuccessfulResponse('Successfully logged out'));
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