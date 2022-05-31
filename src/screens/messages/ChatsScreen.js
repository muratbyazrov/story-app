import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {ChatItem} from "../../components/ChatItem";
import {useDispatch, useSelector} from 'react-redux';
import {setChats} from "../../features/chats/chatsSlice";

export const ChatsScreen = ({navigation}) => {
    const dispatch = useDispatch();
    dispatch(setChats());
    const chats = useSelector(state => state.chats.list);

    const renderItem = (data) => <ChatItem data={{navigation, data}}/>;
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={chats}
                renderItem={renderItem}
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