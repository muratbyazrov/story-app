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
            state.list = [...action.payload];
        },
        removeChat: (state, action) => {
            state.list = state.list.filter(({chatId}) => chatId !== action.payload);
        },
        updateChat: state => {
        },
        setActiveChat: (state, action) => {
            const activeChat = state.list.find(({chatId}) => chatId === action.payload.chatId);
            activeChat.messages = action.payload.chatMessagesBatch;
            state.activeChat = activeChat;
        }
    }
});

export const {setChats, removeChat, updateChat, setActiveChat} = messagesSlice.actions;
export default messagesSlice.reducer;