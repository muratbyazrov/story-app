const {Base} = require("./base");
const {useDispatch} = require("react-redux");
import {setChats, removeChat, updateChat} from '../../features/chats/chatsSlice.js';

class MessengerApi extends Base {
    constructor() {
        super();
        this.setChats()
    }

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

    async setChats() {
        const dispatch = useDispatch();
            let chats = await this.getChats({
                limit: 100,
                userId: '1',
            });

            for (const chat of chats) {
                chat.messages = await this.getMessages({
                    limit: 2,
                    chatId: chat.chatId
                })
            }
            dispatch(setChats(chats))
    }
}

module.exports = {MessengerApi}
