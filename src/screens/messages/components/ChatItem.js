import React from 'react';
import {Pressable, Image, Text, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setActiveChat} from '../../../features/messages/messagesSlice.js'
import {servers} from "../../../servers";

export const ChatItem = ({data: {navigation, data: {item}}}) => {
    const {
        chatId,
        senderAge,
        senderName,
        senderPhotoUrl,
        messages
    } = item;

    const dispatch = useDispatch();
    const setActiveChatMessages = async () => {
        try {
            const chatMessagesBatch = await servers.messenger.getMessages({limit: 1000, chatId});
            dispatch(setActiveChat({chatId, chatMessagesBatch}));
        } catch (error) {
            console.log('ChatItem | setActiveChatMessages: ', error)
        }
    }

    return (
        <Pressable
            key={chatId}
            style={styles.container}
            onPress={() => {
                navigation.navigate('Messages');
                return setActiveChatMessages();
            }}>
            <Image style={styles.image} source={{uri: senderPhotoUrl}}/>
            <View style={styles.nameAndMessage}>
                <Text style={styles.name}>{`${senderName}, ${senderAge}`}</Text>
                <Text style={styles.message}>{messages[0].messageText}</Text>
            </View>
            <Text style={styles.createDttm}>{messages[0].createDttm}</Text>
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