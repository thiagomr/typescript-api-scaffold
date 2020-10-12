export interface Handler {
    name: string;
    action: string;
}

export interface Endpoint {
    method: string;
    path: string;
    middlewares: string[];
    handler: Handler;
}

export interface RouterConfig {
    endpoints: Endpoint[]
}
