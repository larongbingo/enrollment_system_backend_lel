import { Router } from 'express';

export const Account_API_Router: Router = Router();

/**
 * Create an account/user
 */
Account_API_Router
.route('/register')
.put(function(req, res) {

});

/**
 * Log In; sort of read but we can't use
 * the get request because someone might 
 * see the plain text of the password
 */
Account_API_Router
.route('/login')
.post(function(req, res) {

});

/**
 * Update an account/user
 */
Account_API_Router
.route('/update')
.post(function(req, res) {

});



/**
 * Delete an account/user
 */
Account_API_Router
.route('/delete')
.delete(function(req, res) {
  
});