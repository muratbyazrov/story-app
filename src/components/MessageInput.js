import React from 'react';
import {TextInput, SafeAreaView, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export const MessageInput = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <TextInput
                style={styles.container}
                placeholder={'Введите сообщение'}
                multiline={true}/>
            <Ionicons.Button
                style={styles.button}
                color={'white'}
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
        backgroundColor: 'black',
        height: 45,
        width: '100%',
    }
});