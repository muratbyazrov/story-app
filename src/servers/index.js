const {MessengerApi} = require("./messenger-api");
const {Account} = require("./account");
const {Photo} = require("./photo");

class Servers {
    constructor() {
        this.messengerApi = new MessengerApi();
        this.account = new Account();
        this.photo = new Photo();
    }
}

module.exports = {servers: new Servers()}