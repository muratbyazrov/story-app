import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ChatItem} from "./components/ChatItem";

const DATA = [
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
        chatId: 1,
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
        chatId: 1,
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
        chatId: 1,
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
        chatId: 1,
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
        chatId: 1,
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

export const ChatsScreen = ({navigation}) => {
    const renderItem = (data) => <ChatItem data={{navigation, data}}/>;
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={DATA} renderItem={renderItem}
                keyExtractor={item => item.id}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03D2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatList: {
        width: '100%',
    }
});