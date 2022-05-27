import {createSlice} from '@reduxjs/toolkit';
import {servers} from '../../servers'

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        activeChat: {},
        list: []
    },
    reducers: {
        addChats: (state, action) => {

        },
        setChats: async state => {
            const chats = await servers.messengerApi.getChats({
                limit: 100,
                userId: '5',
            });

            for (const chat of chats) {
                chat.messages = await servers.messengerApi.getMessages({
                    limit: 1,
                    chatId: chat.chatId
                })
            }

            state.list = chats;
        },
        removeChat: (state, action) => {
            state.list = state.list.filter(({chatId}) => chatId !== action.payload);
        },
        updateChat: state => {
        },
        setActiveChat: (state, action) => {
            state.activeChat = state.list.find(({chatId}) => chatId === action.payload);
        }
    }
});

export const {setChats, removeChat, updateChat, setActiveChat} = chatsSlice.actions;
export default chatsSlice.reducer;