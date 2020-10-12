import { Endpoint } from '../interfaces';
import { RequestHandler } from 'express';

export default class RouterService {
    validateRouterConfig(endpoints: Endpoint[], middlewares: Record<string, RequestHandler>): void {
        const registeredPaths: Record<string, boolean> = {};

        for (const endpoint of endpoints) {
            for (const middlewareName of endpoint.middlewares) {
                if (!middlewares[middlewareName]) {
                    throw new Error(`middleware not implemented [${middlewareName}]`);
                }
            }

            if (registeredPaths[`${endpoint.method}-${endpoint.path}`]) {
                throw new Error(`duplicated route [${endpoint.method} ${endpoint.path}]`);
            }

            registeredPaths[`${endpoint.method}-${endpoint.path}`] = true;
        }
    }
}
