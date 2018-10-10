import { Sequelize } from 'sequelize-typescript';

import { User } from './models/user.model';
import { Token } from './models/token.model';
import { Log } from './models/log.model';

const MYSQL_CONNECTION = {
  USERNAME: process.env.MYSQL_USERNAME || 'root',
  PASSWORD: process.env.MYSQL_PASSWORD || 'root',
  DATABASE: process.env.MYSQL_DATABASE || 'enrollment_system'
};

/**
 * The instance of the Sequelize ORM; this handles the connection
 * to the MySQL Server and management of Models
 */
export const sequelizeInstance: Sequelize = new Sequelize({
  database: MYSQL_CONNECTION.DATABASE,
  username: MYSQL_CONNECTION.USERNAME,
  password: MYSQL_CONNECTION.PASSWORD,
  dialect: 'mysql',
  logging: process.env.NODE_ENV !== 'testing'
});

sequelizeInstance.addModels([User, Token, Log]);

/**
 * Holds all of the Sequelize Models
 */
export const Models = {
  User,
  Token,
  Log
};