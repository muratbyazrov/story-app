const {
    messengerApiConfig: {
        ws: {host, port},
        http: {host: httpHost, port: httpPort, path}
    }
} = require('../config.js');
const axios = require('axios').default;

class Messenger {
    constructor() {
        this.ws = null;
        this.wsConnector();
        //this.http();
    }

    wsConnector() {
        this.ws = new WebSocket(`${host}:${port}`);
        this.ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.info(`SYSTEM [INFO]: Got WS message:`, data);
            this.wsGate(data);
        };

        this.ws.onerror = (e) => {
            console.log(e.message);
        };

        this.ws.onclose = (e) => {
            console.log(e);
        };
    }

    wsGate(data) {
        if (data.sessionId) {
            this.wsAuth(data.sessionId);
        }
    }

    wsSend(data) {
        this.ws.send(JSON.stringify(data));
    }

    wsAuth(sessionId) {
        this.wsSend({
            domain: "users",
            event: "createUser",
            params: {
                wsSessionId: sessionId,
                userId: "5"
            }
        })
    }

    http() {
        axios.post(`${httpHost}:${httpPort}/${path}`, {
            domain: "chats",
            event: "getChats",
            params: {
                limit: 5,
                offset: 2,
                userId: "1"
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = {Messenger}


new Messenger();
