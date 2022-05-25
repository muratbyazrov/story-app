const {Messenger} = require("./messenger");
const {Account} = require("./account");
const {Photo} = require("./photo");

class Servers {
    constructor() {
        this.messenger = new Messenger();
        this.account = new Account();
        this.photo = new Photo();
    }
}

module.exports = {Servers}