import Server from './app/server';

import handlers from './handlers';
import middlewares from './middlewares';
import routerConfig from './config/router';
import { routerService } from './services';

try {
    routerService.validateRouterConfig(routerConfig.endpoints, middlewares);

    const server = new Server(routerConfig, middlewares, handlers);

    server.listen();
} catch (error) {
    console.error(error);
    process.exit(1);
}
