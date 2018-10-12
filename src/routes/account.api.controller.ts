import { interfaces, controller, httpDelete, requestParam, response, httpPost, httpPut, request } from 'inversify-express-utils';
import { Response, Request } from 'express';
import 'reflect-metadata';

@controller('/account')
export class AccountController implements interfaces.Controller {

  constructor() { }

  @httpPost('/login')
  protected logIn(@request() req: Request, @response() res: Response) {
    
  }

  @httpPost('/logout')
  protected logOut(@request() req: Request, @response() res: Response) {

  }
  
  @httpPut("/register")
  protected register(@request() req: Request, @response() res: Response) {
    this.registerValidation(req);
  }

  protected registerValidation(req: Request) {
    req.check('firstName', 'First Name is empty').notEmpty();
    req.check('middleName', 'Middle Name is empty').notEmpty();
    req.check('lastName', 'Last Name is empty').notEmpty();
    req.check('guardian', 'Guardian is empty').notEmpty();
    req.check('address', 'Address is empty').notEmpty();
    req.check('email', 'Email is empty').notEmpty();
    req.check('phoneNumber', 'Phone Number is empty').notEmpty();
    req.check('username', 'Username is empty').notEmpty();  
    req.check('confirmPassword', 'Confirm Password is empty').notEmpty();
    req.check('password', 'Password is empty').notEmpty();
  
    req.check('password', 'Password does not match with Confirm Password').equals(req.body.confirmPassword);
    req.check('email', 'Email is not valid').isEmail();
  }

  @httpPost("/update")
  protected update(@request() req: Request, @response() res: Response) {

  }

  @httpDelete("/delete")
  protected delete(@requestParam("token") token: string, @response() res: Response) {

  }

}