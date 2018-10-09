import { Model, Column, Table, DataType, AllowNull, Default, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

/**
 * The type of request that was sent to the server
 */
export enum HttpMethod {
  /**
   * This will be used for create statements or functions
   */
  PUT = 'PUT',
  
  /**
   * This will be used for read statements or functions
   */
  GET = 'GET',

  /**
   * This will be used for update statements or functions;
   * this will also be used for other things such as login
   */
  POST = 'POST',

  /**
   * This will be used for delete statements or functions
   */
  DELETE = 'DELETE'
};

/**
 * Holds all of the requests sent to this server
 * @author larongbingo
 * @version 0.0.1
 */
@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'logs'
})
export class Log extends Model<Log> implements LogFields {
  
  @AllowNull(true)
  @Column(DataType.STRING)
  userID: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  requestIP: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  route: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  responseJSON: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  requestJSON: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  success: boolean;

  @Default(HttpMethod.GET)
  @Column(DataType.STRING)
  httpMethod: HttpMethod;

  @AllowNull(true)
  @Column(DataType.STRING)
  remark: string;

}

/**
 * Required fields of the Log Model
 */
export interface LogFields {

  /**
   * Indicates the id of the user that sent the request, if any
   */
  userID?: string;

  /**
   * The IP of the user that send the request
   */
  requestIP?: string;

  /**
   * The route that accepted the request
   */
  route: string;

  /**
   * The data sent to the requester/user
   */
  responseJSON: string;

  /**
   * The JSON string that was sent as a parameter to the request
   */
  requestJSON: string;

  /**
   * Dictates whether the request was successfully processed or not
   */
  success: boolean;

  /**
   * Dictates what type of Http method was used
   */
  httpMethod: HttpMethod;

  /**
   * Custom message set by the route or an admin
   */
  remark?: string;
  
}