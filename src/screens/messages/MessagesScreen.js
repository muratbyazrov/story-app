import React, {useRef} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {MessageItem} from "./components/MessageItem";
import {MessageInput} from "./components/MessageInput";

export const MessagesScreen = () => {
    const messages = useSelector(state => state.chats.list.find(({chatId}) => chatId === state.chats.activeChat.chatId)?.messages);

    const renderItem = (data) => <MessageItem data={data}/>
    const flatListRef = useRef();

    return <View style={styles.center}>
        <FlatList
            ref={flatListRef}
            onContentSizeChange={() => flatListRef.current.scrollToEnd({animated: true})}
            style={styles.flatList}
            data={messages}
            renderItem={renderItem}
            keyExtractor={({messageId}) => messageId}>
        </FlatList>
        <MessageInput/>
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
