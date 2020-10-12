export default {
    'endpoints': [
        {
            'method': 'GET',
            'path': '/ping',
            'middlewares': ['accessLog'],
            'handler': {
                'name': 'mainController',
                'action': 'ping'
            }
        }
    ]
};

