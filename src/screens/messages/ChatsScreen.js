import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ChatItem} from "../../components/ChatItem";
import {useSelector, useDispatch} from 'react-redux';
import {addChat, removeChat, updateChat} from '../../features/chats/chatsSlice.js';

export const ChatsScreen = ({navigation}) => {
    const renderItem = (data) => <ChatItem data={{navigation, data}}/>;
    const chats = useSelector(state => state.chats.list);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={chats} renderItem={renderItem}
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