const {Messenger} = require('./messenger');
const {Account} = require('./account');
const {Photo} = require('./photo');

class Servers {
    constructor() {
        this.account = new Account();
        this.messenger = new Messenger();
        this.photo = new Photo();
    }
}

module.exports = {servers: new Servers()};
