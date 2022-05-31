import {createSlice} from '@reduxjs/toolkit';

export const chatsSlice = createSlice({
    name: 'chats',
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
            state.activeChat = state.list.find(({chatId}) => chatId === action.payload);
        }
    }
});

export const {setChats, removeChat, updateChat, setActiveChat} = chatsSlice.actions;
export default chatsSlice.reducer;