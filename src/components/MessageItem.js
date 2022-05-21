import React from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';

export const MessageItem = ({data: {item: {createDttm, isRead, messageText, senderId, messageId}}}) => {
    return (
        <Pressable style={styles.container}>
            <Text>{messageText} {createDttm}</Text>
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

});