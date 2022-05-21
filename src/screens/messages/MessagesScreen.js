import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MessagesScreen = ({messages}) => {
    console.log(messages)
    return <View style={styles.center}>
        <Text>MessagesScreen!</Text>
    </View>
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: '#03D2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});