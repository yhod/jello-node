module.exports = {
    'development': {
        'username': 'simpleuser',
        'password': null,
        'database': 'simple_app_db',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        logging: false,
    },
    'test': {
        'username': 'simpleuser',
        'password': null,
        'database': 'test_simple_app_db',
        'host': '127.0.0.1',
        'dialect': 'postgres',
        logging: false,
    },
    'production': {
        'username': 'root',
        'password': null,
        'database': 'database_production',
        'host': '127.0.0.1',
        'dialect': 'postgres',
    },
}
