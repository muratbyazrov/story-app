const {ws} = require('../../app-config.js');

const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:9000');

class ServerApi {
    constructor() {
        this.getChat()
    }

    getChat() {
        try {
            socket.addEventListener('open', function (event) {
                socket.send('Hi Server');
            });

            socket.addEventListener('message', function (event) {
                console.log('Message from server ', event.data);
            });
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = {serverApi: new ServerApi()}