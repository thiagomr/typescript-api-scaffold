import express from 'express';
import { RouterConfig } from '../interfaces';

export default class Server {
    app: express.Application;
    port: number;
    middlewares: Record<string, express.RequestHandler>;
    handlers: Record<string, unknown>;
    router: RouterConfig;

    constructor(
        router: RouterConfig,
        middlewares: Record<string, express.RequestHandler>,
        handlers: Record<string, unknown>
    ) {
        this.app = express();
        this.port = 8000;
        this.middlewares = middlewares;
        this.handlers = handlers;
        this.router = router;

        this.setupEndpoints();
    }

    setupEndpoints(): void {
        for (const endpoint of this.router.endpoints) {
            this.app[endpoint.method.toLowerCase()](
                endpoint.path,
                ...endpoint.middlewares.map(middlewareName => this.middlewares[middlewareName]),
                this.handlers[endpoint.handler.name][endpoint.handler.action]
            );
        }
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`server listen at ${this.port}`));
    }
}
