import { configureStore } from '@reduxjs/toolkit';
import messagesSlice from './features/messages/messagesSlice.js';
import accountSlice from "./features/account/accountSlice.js";

export default configureStore({
    reducer: {
        chats: messagesSlice,
        account: accountSlice,
    }
})
