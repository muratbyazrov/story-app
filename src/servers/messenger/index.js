const {Base} = require("./base");
import store from '../../store/store.js';
import {addMessages} from "../../store/features/messages/messagesSlice.js";

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
        const chats = await this._getChats({
            limit: 100,
            userId: '1',
        });

        for (const chat of chats) {
            chat.messages = await this.getMessages({
                limit: 1,
                chatId: chat.chatId
            })
        }

        return chats;
    }

    async sendMessage(params){
        const message = await this.http({
            domain: "messages",
            event: "createMessage",
            params,
        });
        store.dispatch(addMessages(message.data));
    }

    gotMessage({data}) {
        store.dispatch(addMessages(data));
    }
}

module.exports = {Messenger}
