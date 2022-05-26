const {Base} = require("./base");

class Messenger extends Base {
    getChats(params) {
        this.http({
                domain: "chats",
                event: "getChats",
                params,
            }
        )
    }

    getMessages(params) {
        this.http({
            domain: "messages",
            event: "getMessages",
            params,
        })
    }

}

module.exports = {Messenger}


new Messenger();
