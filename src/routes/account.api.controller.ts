import { interfaces, controller, httpDelete, requestParam, response, httpPost, httpPut, request } from 'inversify-express-utils';
import { Response, Request } from 'express';

@controller('/account')
export class AccountController implements interfaces.Controller {

  constructor() { }

  @httpPost('/login')
  private logIn(@request() req: Request, @response() res: Response) {
    
  }

  @httpPost('/logout')
  private logOut(@request() req: Request, @response() res: Response) {

  }
  
  @httpPut("/register")
  private register(@request() req: Request, @response() res: Response) {

  }

  @httpPost("/update")
  private update(@request() req: Request, @response() res: Response) {

  }

  @httpDelete("/delete")
  private delete(@requestParam("token") token: string, @response() res: Response) {

  }

}