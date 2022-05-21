import React from 'react';
import {Pressable, Image, Text, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeChat, setActiveChat} from '../features/chats/chatsSlice.js'

export const ChatItem = ({data: {navigation, data: {item}}}) => {
    const {chatId, sender: {photoUri, name}, messages} = item;
    const dispatch = useDispatch();

    return (
        <Pressable style={styles.container}
                   onPress={() => {
                       navigation.navigate('Messages');
                       return dispatch(setActiveChat(chatId));
                   }}
                   onLongPress={() => dispatch(removeChat(chatId))}>
            <Image style={styles.image} source={{uri: photoUri}}/>
            <View style={styles.nameAndMessage}>
                <Text style={styles.name}>{`${name}`}</Text>
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