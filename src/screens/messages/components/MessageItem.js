import React from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

export const MessageItem = ({data: {item: {createDttm, isRead, messageText, senderId, messageId}}}) => {
    const userId = useSelector(state => state.user.userId);

    return (
        <Pressable style={userId === senderId ? styles.myMessage : styles.cameMessage}>
            <Text style={styles.messageText}>{messageText}</Text>
            <Text style={styles.createDttm}>{createDttm}</Text>
        </Pressable>
    )
};

const commonMessageStyles = {
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 15,
    maxWidth: '70%',
    marginBottom: 8,
}

const styles = StyleSheet.create({
    myMessage: {
        ...commonMessageStyles,
        backgroundColor: "#B5FF18",
        marginLeft: '30%',
    },
    cameMessage: {
        ...commonMessageStyles,
        backgroundColor: "white",
    },
    createDttm: {
        color: 'gray',
        fontSize: 10,
        marginLeft: '78%'
    },
    messageText: {
        left: 0
    }
});