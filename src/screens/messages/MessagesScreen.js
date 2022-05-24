import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {MessageItem} from "../../components/MessageItem";
import {MessageInput} from "../../components/MessageInput";

export const MessagesScreen = () => {
    const renderItem = (data) => <MessageItem data={data}/>
    const messages = useSelector(state => state.chats.activeChat.messages);

    return <View style={styles.center}>
        <FlatList
            style={styles.flatList}
            data={messages}
            renderItem={renderItem}
            keyExtractor={item => item.id}>
        </FlatList>
        <MessageInput />
    </View>
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: '#03D2FF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    flatList: {
        width: '100%',
        position: 'relative',
        padding: 5
    }
});