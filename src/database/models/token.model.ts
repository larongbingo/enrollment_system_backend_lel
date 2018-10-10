import { Model, Column, DataType, Table, Default, AllowNull, HasOne } from 'sequelize-typescript';
import { sign, decode } from 'jsonwebtoken';
import { generate } from 'randomstring';

import { User } from './user.model';

/**
 * The key that encodes the Session Token
 */
const JWT_PRIVATE_KEY: string = generate(50);

/**
 * The type of the token
 * @author larongbingo
 * @version 0.0.1
 */
export enum TokenType {
  /**
   * The login session of the user
   */
  Session = "@TOKEN/SESSION",

  /**
   * CSRF Token on the forms
   */
  CSRF = "@TOKEN/CSRF"
};

/**
 * Holds all of the session and CSRF tokens
 * 
 * Session Tokens are to be used when users wants to access data
 * 
 * CSRF Tokens are used when they want to change their data or login
 * 
 * @author larongbingo
 * @version 0.0.1
 */
// TODO: Clear all keys for every restart
@Table({
  timestamps: true,
  tableName: 'tokens'
})
export class Token extends Model<Token> {
  /**
   * The identifier of the user that was linked to this token
   * @see User
   */
  @AllowNull(true)
  @HasOne(() => User)
  @Column(DataType.STRING)
  userID: string;

  /**
   * The type of the token
   */
  @Default(TokenType.Session)
  @Column(DataType.STRING)
  tokenType: TokenType;

  /**
   * The token value
   */
  @AllowNull(false)
  @Column(DataType.STRING)
  token: string;

  /**
   * Creates a session token using the passed user details
   * @param user The user details that wants to create a session
   * @returns The session token for the user
   */
  public static async CreateSessionToken(user: User) {
    if(!user) {
      return null;
    }

    return this.create({userID: user.id, username: user.username, tokenType: TokenType.Session, token: sign({id: user.id}, JWT_PRIVATE_KEY)});
  }

  /**
   * Checks if the given token is a valid session token
   * @param sessionToken Token that needs to be validated
   * @returns Returns true if the given token is valid, false otherwise
   */
  public static ValidateSessionToken(sessionToken: string) {
    if(!sessionToken || sessionToken.length <= 0) {
      return false;
    }

    return decode(sessionToken) ? true : false;
  }

  /**
   * Creates a CSRF Token
   * @returns The CSRF Token
   */
  public static async CreateCSRFToken() {
    return this.create({tokenType: TokenType.CSRF, token: generate(50)});
  }
};

