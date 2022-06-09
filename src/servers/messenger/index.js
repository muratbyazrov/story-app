const {Base} = require("../base");
import store from '../../store/store.js';
import {addMessages} from "../../store/features/messages/messagesSlice.js";
import {messengerConfig} from "../config.js";

class Messenger extends Base {
    constructor() {
        super(messengerConfig);
    }

    async getMessages(params) {
        const {data} = await this.httpAdapter({
            domain: "messages",
            event: "getMessages",
            params,
        })

        return data;
    }

    async getChats() {
        const chats = await this.httpAdapter({
            domain: "chats",
            event: "getChats",
            params: {
                limit: 100,
                userId: '1',
            },
        })

        for (const chat of chats) {
            chat.messages = await this.getMessages({
                limit: 1,
                chatId: chat.chatId
            })
        }

        return chats;
    }

    async sendMessage(params){
        const message = await this.httpAdapter({
            domain: "messages",
            event: "createMessage",
            params,
        });
        store.dispatch(addMessages(message.data));
    }

    gotWsMessage({data}) {
        store.dispatch(addMessages(data));
    }
}

module.exports = {Messenger}
