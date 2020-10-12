import { Request, Response } from 'express';

export default class MainController {
    ping(_: Request, res: Response) {
        try {
            return res.send({
                message: 'pong'
            });
        } catch (error) {
            return res.status(500).send({
                message: 'server error'
            });
        }
    }
}
