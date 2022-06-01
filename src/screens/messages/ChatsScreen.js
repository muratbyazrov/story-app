import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {ChatItem} from "./components/ChatItem";
import {useSelector} from 'react-redux';

export const ChatsScreen = ({navigation}) => {
    const chats = useSelector(state => state.chats.list);

    if (!chats.length) {
        return (
            <View style={styles.container}>
                <Text>Нет сообщений для вас</Text>
            </View>
        )
    }

    const renderItem = (data) => <ChatItem data={{navigation, data}}/>;
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={chats}
                renderItem={renderItem}
                keyExtractor={({chatId}) => chatId}/>
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