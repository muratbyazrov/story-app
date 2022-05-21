import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {MessageItem} from "../../components/MessageItem";

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
    </View>
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: '#03D2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatList: {
        width: '100%',
        position: 'relative',
        padding: 5
    }
});