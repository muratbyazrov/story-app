const {Base} = require("./base");

class Messenger extends Base {
    async getChats(params) {
        const {data} = await this.http({
            domain: "chats",
            event: "getChats",
            params,
        })

        return data;
    }

    async getMessages(params) {
        const {data} = await this.http({
            domain: "messages",
            event: "getMessages",
            params,
        })

        return data;
    }
}

module.exports = {Messenger}
