import { VerifyFunction } from 'passport-local';

import { User } from '@database';

export const PassportLocalStrategy: VerifyFunction = function(username, password, done) {
  
  // Check if the username and password is not null or empty
  if(!username || !password || username.length <= 0 || password.length <= 0) {
    return done(null, false, { message: 'Empty password or username' });
  }

  return User.findOne({where: {username: username}})
  .then(user => {

    // Find a user that has a match with the given username  
    if(!user) {
      return done(null, false, { message: 'Incorrect username' });
    }

    return User.LogIn(password, user!)
    .then(res => {
    
      // Check if the password match with the hash 
      if(!res) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    
    });
  
  })
  .catch(done);
}