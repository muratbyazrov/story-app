import store from '../store/store.js';

class Base {
    constructor(config) {
        this.httpConfig = config.http;
        this.wsConfig = config.ws;
        this.wsAdapter();
    }

    wsAdapter() {
        const {host, port} = this.wsConfig;
        this.wsServer = new WebSocket(`${host}:${port}`);

        this.wsServer.onmessage = event => {
            const data = JSON.parse(event.data);
            console.info(`SYSTEM [INFO]: Got WS message:`, data);
            data.sessionId && this.wsAuth(data.sessionId);
            this.wsGate(data);
        };

        this.wsServer.onerror = err => {
            console.info(`SYSTEM [ERROR]: Error in wsAdapter:`, err.message);
            setTimeout(() => this.wsAdapter(), 1000);
        };

        this.wsServer.onclose = err => {
            console.info(`SYSTEM [ERROR]: ws connection close with error:`, err.message);
            setTimeout(() => this.wsAdapter(), 1000);
        };
    }

    wsGate(data) {
        const {sessionId, domain} = data;
        sessionId && this.wsAuth(sessionId);

        if (domain === 'messages') {
            this.gotMessengerMessage(data);
        }
    }

    // eslint-disable-next-line no-empty-function
    gotMessengerMessage(data) {
    }

    async wsAuth(sessionId) {
        const userData = store.getState().user.userData
        const {userId, firstName, age, photoUrl} = userData;
        try {
            await this.httpAdapter({
                domain: 'users',
                event: 'createUser',
                params: {wsSessionId: sessionId, userId, firstName, age, photoUrl},
            });
        } catch (err) {
            console.info(`SYSTEM [ERROR]: ws auth is failed:`, err.message);
            console.info(`SYSTEM [INFO]: retry ws auth...`);
            this.wsAdapter();
        }
    }

    async httpAdapter(data) {
        console.info(`[INFO]: Send http request`, data);
        const {host, port, path} = this.httpConfig;
        try {
            const response = await fetch(`${host}:${port}/${path}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.info(`[INFO]: Get http response`, data);
            return response.json();
        } catch (error) {
            console.error('SYSTEM ERROR', error);
        }
    }
}

module.exports = {Base};
