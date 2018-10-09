/**
 * Holds the common parts of any API Reponses
 */
export class Response {
  /**
   * The time the request was processed
   */
  public iat: Number;

  /**
   * Holds all of the messages to the requestee
   */
  public payload: any;

  /**
   * Indicates whether the request was approved or not.
   * It will also indicate whether an error occured during the
   * processing of the request.
   */
  public success: boolean;
  
  constructor(payload: any, success: boolean) {
    this.iat = Date.now();
    this.payload = payload;
    this.success = success;
  }
}

/**
 * Signifies that the request was successful
 */
export class SuccessfulResponse extends Response {
  constructor(payload: any) {
    super(payload, true);
  }
}

/**
 * Signifies that the request failed
 */
export class FailedResponse extends Response {
  constructor(payload: any) {
    super(payload, false);
  }
}