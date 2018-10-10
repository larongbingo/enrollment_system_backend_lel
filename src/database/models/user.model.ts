import { Table, Column, Model, DataType, Default, PrimaryKey, AllowNull, BeforeCreate, Unique, BeforeUpdate, HasMany } from 'sequelize-typescript';
import { compare, genSalt, hash } from 'bcrypt';
import { Token } from './token.model';

/**
 * Represents the people who will require access to the data stored
 * 
 * @author larongbingo
 * @version 0.0.1
 */
@Table({ 
  timestamps: true,
  paranoid: true,
  tableName: 'users'
})
export class User extends Model<User> implements UserFields {
//#region Fields

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  firstName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  middleName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  lastName: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  guardian: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  address: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  phoneNumber: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string
  
  @HasMany(() => Token)
  @Column
  tokens: Token[];
//#endregion

  /**
   * Returns true if the given username is unique, false otherwise
   * @param username the username that needs to be checked
   * @returns Returns true if the username is unique, false otherwise
   */
  public static async IsUsernameUnique(username: string) {
    // Check if its not a null and not an empty string
    if(!username || username.length <= 0) {
      return false;
    }

    return User.findOne({ where: { username: username } })
    .then(async user => user ? false : true);
  }

  /**
   * Checks whether the given email is unique
   * @param email the email that needs to be checked
   * @returns Returms true of the email is unique, false otherwise
   */
  public static async IsEmailUnique(email: string) {
    if(!email || email.length <= 0) {
      return false;
    }

    return User.findOne({ where: { email: email } })
    .then(async email => email ? false : true);
  }

  /**
   * An instance method that checks whether the given
   * plain text password matches with the hashed password
   * @param plain_text_password The plain_text_password that needs to be compared
   * @param account The user instance that needs to be compared
   * @returns True if the plain_text_password matches with the hash, false otherwise
   */
  public static async LogIn(plain_text_password: string, account: User) {
    if(!plain_text_password || !account || plain_text_password.length <= 0) {
      return false;
    }

    return compare(plain_text_password, account.password);
  }

  /**
   * Hashes the given User's password
   * @param instance The User instance that needs to be updated
   */
  @BeforeCreate
  @BeforeUpdate
  protected static async HashPasswordWithSalt(instance: User) {
    await genSalt(10)
    .then(async salt => hash(instance.password, salt))
    .then(async hash => instance.password = hash); 
  }
} // Class User

/**
 * The required fields of the user model
 */
export interface UserFields {
  /**
   * The unique identifiers for each user
   */
  id?: string;

  /**
   * The first name of the user
   */
  firstName: string;

  /**
   * The middle name of the user
   */
  middleName: string;

  /**
   * The last name of the user
   */
  lastName: string;

  /**
   * The name of any parent or guardian of the user
   */
  guardian: string;

  /**
   * The current address of the user; this needs to be verifed
   */
  address: string;

  /**
   * The email contact of the user; this needs to be
   * verified
   */
  email: string;

  /**
   * The phone number of the user
   */
  phoneNumber: string;

  /**
   * The unique identifier of the web app for each user
   */
  username: string;

  /**
   * The hashed password of the user
   */
  password: string;
}