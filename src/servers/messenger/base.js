const {
    messengerApiConfig: {
        ws: {host, port}, http: {host: httpHost, port: httpPort, path}
    }
} = require('../config.js');
const axios = require('axios').default;

class Base {
    constructor() {
        this.wsServer = null;
        this.wsConnector();
    }

    wsConnector() {
        this.wsServer = new WebSocket(`${host}:${port}`);
        this.wsServer.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.info(`SYSTEM [INFO]: Got WS message:`, data);
            this.wsGate(data);
        };

        this.wsServer.onerror = (e) => {
            console.log(e.message);
        };

        this.wsServer.onclose = (e) => {
            console.log(e);
        };
    }

    wsGate(data) {
        if (data.sessionId) {
            this.wsAuth(data.sessionId);
        }
    }

    wsAuth(sessionId) {
        this.ws({
            domain: "users", event: "createUser", params: {
                wsSessionId: sessionId, userId: "5"
            }
        })
    }

    ws(data) {
        this.wsServer.send(JSON.stringify(data));
    }

    http(data) {
        axios.post(`${httpHost}:${httpPort}/${path}`, data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = {Base}
