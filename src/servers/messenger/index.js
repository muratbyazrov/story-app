const {Base} = require("./base");
const {servers} = require("../index");

class Messenger extends Base {
    async _getChats(params) {
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

    async getChats() {
        const chats = await servers.messenger._getChats({
            limit: 100,
            userId: '5',
        });

        for (const chat of chats) {
            chat.messages = await servers.messenger.getMessages({
                limit: 1,
                chatId: chat.chatId
            })
        }

        return chats;
    }
}

module.exports = {Messenger}
