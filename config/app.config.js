module.exports = {
    server: {
        port: 8001,
        host: '127.0.0.1',
        cors: {
            all: {
                origin: '*',
                methods: '*',
                exposedHeaders: '*'
            }
        }
    },
    auth: {
        tokenExpirationTimeSec: 3000,
        version: 1
        },
    database: {
        uri: 'mongodb://localhost:27017/users',
        promise: Promise,
        options: {
            useNewUrlParser: true,
            useCreateIndex : true
        }
    },
}