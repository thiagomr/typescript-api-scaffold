import { Request, Response, NextFunction } from 'express';

export default (req: Request, _: Response, next: NextFunction) => {
    console.info(new Date(), req.method, req.url);
    next();
}
