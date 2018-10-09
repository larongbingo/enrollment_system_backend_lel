import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

export function Create404(req: Request, res: Response, next: NextFunction) {
  const error404_code: number = 404;
  
  next(createError(error404_code));
}