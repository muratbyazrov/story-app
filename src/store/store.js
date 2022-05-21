import { configureStore } from '@reduxjs/toolkit';
import chatsSlice from '../features/chats/chatsSlice.js';
import userSlice from "../features/user/userSlice.js";

export default configureStore({
    reducer: {
        chats: chatsSlice,
        user: userSlice,
    }
})