import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

export function ErrorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.send(`Error ${err.status}\n${err.message}`);
}