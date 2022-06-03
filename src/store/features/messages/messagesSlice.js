import {createSlice} from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        activeChat: {},
        list: []
    },
    reducers: {
        addChats: (state, action) => {
        },
        setChats: (state, action) => {
            state.list = action.payload;
        },
        removeChat: (state, action) => {
            state.list = state.list.filter(({chatId}) => chatId !== action.payload);
        },
        updateChat: state => {
        },
        setActiveChat: (state, action) => {
            const activeChat = state.list.find(({chatId}) => chatId === action.payload.chatId);
            activeChat.messages = action.payload.messages;
            state.activeChat = activeChat;
        },
        addMessages: (state, action) => {
            state.list = state.list.map((chat) => {
                if (chat.chatId === action.payload.chatId) {
                    chat.messages = [...chat.messages, action.payload]
                }
                return chat
            })
        }
    }
});

export const {setChats, removeChat, updateChat, setActiveChat, addMessages} = messagesSlice.actions;
export default messagesSlice.reducer;