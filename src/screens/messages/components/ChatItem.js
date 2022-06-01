import React from 'react';
import {Pressable, Image, Text, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setActiveChat} from '../../../features/messages/messagesSlice.js'
import {servers} from "../../../servers";

export const ChatItem = ({data: {navigation, chats}}) => {
    const {item: {chatId, senderAge, senderName, senderPhotoUrl, messages}} = chats;
    const lastMessage = messages[messages.length - 1];

    const dispatch = useDispatch();
    const setMessages = async () => {
        try {
            const messages = await servers.messenger.getMessages({
                limit: 1000,
                chatId
            });
            dispatch(setActiveChat({chatId, messages}));
        } catch (error) {
            console.log('ChatItem | setMessages: ', error)
        }
    }

    return (
        <Pressable
            key={chatId}
            style={styles.container}
            onPress={() => {
                navigation.navigate('Messages');
                return setMessages();
            }}>

            <Image style={styles.image} source={{uri: senderPhotoUrl}}/>

            <View style={styles.nameAndMessage}>
                <Text style={styles.name}>{`${senderName}, ${senderAge}`}</Text>
                <Text style={styles.message}>{lastMessage ? lastMessage.messageText : 'Сообщений нет'}</Text>
            </View>

            <Text style={styles.createDttm}>{lastMessage ? lastMessage.createDttm : ''}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 85,
        width: '100%',
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 10,
        position: 'relative'
    },
    nameAndMessage: {},
    image: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    name: {
        fontSize: 20
    },
    message: {
        fontSize: 18,
        color: 'gray'
    },
    createDttm: {
        color: 'gray',
    }
});