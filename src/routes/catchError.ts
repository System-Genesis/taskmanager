import { Request, Response, NextFunction } from 'express';

export const catchError = (
  func: (req: Request, res: Response, next?: NextFunction) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    func(req, res, next).catch((e) => res.status(400).send(e));
  };
};
