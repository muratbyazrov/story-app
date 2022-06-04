module.exports = {
    messengerConfig: {
        http: {
            host: 'http://192.168.1.71',
            port: 3000,
            path: 'story-messenger-api/v1',
        },
        ws: {
            host: 'ws://192.168.1.71',
            port: 9000,
        },
    },

    accountConfig: {
        http: {
            host: 'http://192.168.1.71',
            port: 3001,
            path: 'story-account-api/v1',
        },
        ws: {
            host: 'ws://192.168.1.71',
            port: 9001,
        },
    },
};
