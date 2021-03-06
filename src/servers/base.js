import store from '../store/store.js';

class Base {
    constructor(config) {
        this.httpConfig = config.http;
        this.wsConfig = config.ws;
        this.wsConfig.isActive && this.wsAdapter();
        this.wsSessionId = null;
    }

    wsAdapter() {
        const {host, port} = this.wsConfig;
        this.wsServer = new WebSocket(`${host}:${port}`);

        this.wsServer.onmessage = event => {
            const data = JSON.parse(event.data);
            console.info(`SYSTEM [INFO]: Got WS message:`, data);
            this.wsGate(data);
        };

        this.wsServer.onerror = err => {
            console.info(`SYSTEM [ERROR]: Error in wsAdapter:`, err.message);
        };

        this.wsServer.onclose = err => {
            console.info(`SYSTEM [ERROR]: ws connection close with error:`, err.message);
            setTimeout(() => this.wsAdapter(), 3000);
        };
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

    wsGate(data) {
        const {sessionId} = data;
        sessionId && (this.wsSessionId = sessionId);
        this.gotWsMessage(data);
    }

    async wsAuth() {
        const accountData = store.getState().account.accountData
        const {accountId, login, password, firstName, age, photoUrl} = accountData;
        try {
            await this.httpAdapter({
                domain: 'accounts',
                event: 'createAccount',
                params: {
                    accountId,
                    login,
                    password,
                    wsSessionId: this.wsSessionId,
                    firstName,
                    age,
                    photoUrl,
                },
            });
        } catch (err) {
            console.info(`SYSTEM [ERROR]: ws auth is failed:`, err.message);
            console.info(`SYSTEM [INFO]: retry ws auth...`);
            setTimeout(() => this.wsAdapter(), 3000);
        }
    }

    // eslint-disable-next-line no-empty-function
    gotWsMessage(data) {
    }
}

module.exports = {Base};
