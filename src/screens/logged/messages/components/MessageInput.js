import React from 'react';
import {TextInput, SafeAreaView, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useSelector} from "react-redux";
import {servers} from "../../../../servers";
import {useRef} from 'react';

export const MessageInput = () => {
    const chatId = useSelector(state => state.chats.activeChat.chatId);
    const senderId = useSelector(state => state.account.accountData.accountId);
    const [messageText, onChangeText] = React.useState(null);
    const textInputRef = useRef();

    const sendMessage = async () => {
        await servers.messenger.sendMessage({messageText, chatId, senderId});
        textInputRef.current.clear();
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TextInput
                ref={textInputRef}
                onChangeText={onChangeText}
                autoFocus={true}
                style={styles.container}
                placeholder={'Введите сообщение'}
                multiline={true}/>
            <Ionicons.Button
                onPress={() => sendMessage()}
                style={styles.button}
                color={'gray'}
                name="send"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '88%',
        padding: 8,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 140,
    },
    safeAreaView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: 'white',
        height: 45,
        width: '100%',
        zIndex: 2
    }
});
