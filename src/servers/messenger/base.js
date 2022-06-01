const {messengerConfig: {ws, http}} = require('../config.js');
const {host: httpHost, port: httpPort, path} = http;
const {host, port} = ws;

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
        } else if(data.domain === 'messages') {
            this.gotMessage(data)
        }
    }

    gotMessage(data) {
    }

    wsAuth(sessionId) {
        this.ws({
            domain: "users",
            event: "createUser",
            params: {
                wsSessionId: sessionId,
                userId: "1",
                firstName: 'Murat',
                age: 28,
                photoUrl: 'https://sun9-26.userapi.com/s/v1/if1/MI4EL-KWavrMGs9C_f8R_6CCSrFt--ftOpAnORW1fbLKWrXZQ4N4WeVeyeBhbvJGjrdDTWJr.jpg?size=2560x1706&quality=96&type=album'
            }
        })
    }

    ws(data) {
        this.wsServer.send(JSON.stringify(data));
    }

    async http(data) {
        try {
            const response = await fetch(`${httpHost}:${httpPort}/${path}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            return response.json();
        } catch (error) {
            console.error('SYSTEM ERROR', error);
        }
    }
}

module.exports = {Base}
