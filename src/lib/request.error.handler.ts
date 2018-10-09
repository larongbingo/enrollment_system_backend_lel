import { Request, Response } from 'express';
import { FailedResponse } from './responses';

export function RequestErrorHandlerCreator(req: Request, res: Response) {
  if(!req || !res) {
    return null;
  }

  return function RequestErrorHandler(err: any) {
    if(!err) {
      return false;
    }

    // Dont show any logs if its in a testing environment
    if(process.env.NODE_ENV !== 'testing') {
      console.error(req.body);
      console.error(err);
    }
    
    if(process.env.NODE_ENV === 'development') {
      res.json(new FailedResponse({error: err}));
      return true;
    }

    res.json(new FailedResponse({message: 'Error occurred during processing of request'}));
    return true;
  };
}