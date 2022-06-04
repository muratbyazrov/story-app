const {accountConfig: {ws, http}} = require('../config.js');
const {host: httpHost, port: httpPort, path} = http;
const {host, port} = ws;

class Base {
    constructor() {
        this.wsServer = null;
        this.wsConnector();
    }

    wsConnector() {
        this.wsServer = new WebSocket(`${host}:${port}`);
        this.wsServer.onmessage = event => {
            const data = JSON.parse(event.data);
            console.info(`SYSTEM [INFO]: Got WS message:`, data);
            this.wsGate(data);
        };

        this.wsServer.onerror = err => {
            console.log(err.message);
        };

        this.wsServer.onclose = err => {
            console.log(err);
        };
    }

    wsGate(data) {
    }

    ws(data) {
        this.wsServer.send(JSON.stringify(data));
    }

    async http(data) {
        try {
            const response = await fetch(`${httpHost}:${httpPort}/${path}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            return response.json();
        } catch (error) {
            console.error('SYSTEM ERROR', error);
        }
    }
}

module.exports = {Base};
