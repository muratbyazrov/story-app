import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from '../features/messages/messagesSlice.js';
import userSlice from "../features/user/userSlice.js";

export default configureStore({
    reducer: {
        chats: messagesSlice,
        user: userSlice,
    }
})