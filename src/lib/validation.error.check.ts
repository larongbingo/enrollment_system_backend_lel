import { Request, Response } from 'express';
import { FailedResponse } from './responses';

/**
 * Checks if there any validation errors, if there any
 * validation error, the function returns true and 
 * calls the req.json, otherwise returns false
 * @param req The request object of a route
 * @param res The response object of a route
 * @returns True if there are errors, false otherwise
 */
export function ValidationErrorCheck(req: Request, res: Response) {
  let validation_errors = req.validationErrors();
  
  if(validation_errors) {
    res.json(new FailedResponse(validation_errors));
    return true;
  }

  return false;
}