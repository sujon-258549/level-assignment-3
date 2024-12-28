import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsynch = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

export default catchAsynch;
