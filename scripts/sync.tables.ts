/**
 * sync.tables.ts
 * FORCEFULLY updates the tables into the MySQL Database.
 * 
 * NOTE:
 * This forcefully deletes all of the tables previously 
 * stored in the database
 */

import { sequelizeInstance } from '../src/database';

// Check if the environment is not set 'production'
if(process.env.NODE_ENV === 'production') {
  console.error('NODE_ENV is set to "production"');
  process.exit(1);
}

sequelizeInstance
.authenticate()
.then(() => sequelizeInstance.sync({force: true}))
.then(() => process.exit(0))
.catch((err) => {
  console.error('Error occurred');
  console.error(err);
  process.exit(1);
});