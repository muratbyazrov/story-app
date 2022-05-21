import {createSlice} from '@reduxjs/toolkit';

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        activeChat: {},
        list: [
            {
                chatId: 1,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun1-26.userapi.com/s/v1/if1/MI4EL-KWavrMGs9C_f8R_6CCSrFt--ftOpAnORW1fbLKWrXZQ4N4WeVeyeBhbvJGjrdDTWJr.jpg?size=2560x1706&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 2,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun9-52.userapi.com/s/v1/if2/WZSa2D1BK5vn6EW9teYoAZ2FP-xwE_riLEpufNV-nuX1MaUXNpkkIrAz3UNrKZ_4jff0x-XRIje-AC9NG2DZpa-U.jpg?size=768x1024&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 3,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun1-26.userapi.com/s/v1/if1/MI4EL-KWavrMGs9C_f8R_6CCSrFt--ftOpAnORW1fbLKWrXZQ4N4WeVeyeBhbvJGjrdDTWJr.jpg?size=2560x1706&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 4,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun9-52.userapi.com/s/v1/if2/WZSa2D1BK5vn6EW9teYoAZ2FP-xwE_riLEpufNV-nuX1MaUXNpkkIrAz3UNrKZ_4jff0x-XRIje-AC9NG2DZpa-U.jpg?size=768x1024&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 5,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun1-26.userapi.com/s/v1/if1/MI4EL-KWavrMGs9C_f8R_6CCSrFt--ftOpAnORW1fbLKWrXZQ4N4WeVeyeBhbvJGjrdDTWJr.jpg?size=2560x1706&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 6,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun9-52.userapi.com/s/v1/if2/WZSa2D1BK5vn6EW9teYoAZ2FP-xwE_riLEpufNV-nuX1MaUXNpkkIrAz3UNrKZ_4jff0x-XRIje-AC9NG2DZpa-U.jpg?size=768x1024&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 7,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun1-26.userapi.com/s/v1/if1/MI4EL-KWavrMGs9C_f8R_6CCSrFt--ftOpAnORW1fbLKWrXZQ4N4WeVeyeBhbvJGjrdDTWJr.jpg?size=2560x1706&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 8,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun9-52.userapi.com/s/v1/if2/WZSa2D1BK5vn6EW9teYoAZ2FP-xwE_riLEpufNV-nuX1MaUXNpkkIrAz3UNrKZ_4jff0x-XRIje-AC9NG2DZpa-U.jpg?size=768x1024&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 9,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun1-26.userapi.com/s/v1/if1/MI4EL-KWavrMGs9C_f8R_6CCSrFt--ftOpAnORW1fbLKWrXZQ4N4WeVeyeBhbvJGjrdDTWJr.jpg?size=2560x1706&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
            {
                chatId: 10,
                sender: {
                    senderId: 1,
                    name: 'Мурат',
                    age: 25,
                    photoUri: 'https://sun9-52.userapi.com/s/v1/if2/WZSa2D1BK5vn6EW9teYoAZ2FP-xwE_riLEpufNV-nuX1MaUXNpkkIrAz3UNrKZ_4jff0x-XRIje-AC9NG2DZpa-U.jpg?size=768x1024&quality=96&type=album'
                },
                recipientId: 1,
                messages: [
                    {
                        messageId: 1,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: true,
                    },
                    {
                        messageId: 2,
                        senderId: 1,
                        createDttm: '2022-01-01',
                        messageText: 'Привет! Как твои дела?)',
                        isRead: false,
                    }
                ]
            },
        ]
    },
    reducers: {
        addChat: state => {
        },
        removeChat: (state, action) => {
            state.list = state.list.filter(({chatId}) => chatId !== action.payload);
        },
        updateChat: state => {
        },
        setActiveChat: (state, action) => {
            state.activeChat = state.list.find(({chatId}) => chatId === action.payload);
            console.log(11, state.activeChat)
        }
    }
});

export const {addChat, removeChat, updateChat, setActiveChat} = chatsSlice.actions;
export default chatsSlice.reducer;