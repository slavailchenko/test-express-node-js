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
        tokenExpirationTimeSec: 300,
        version: 1
        }
}