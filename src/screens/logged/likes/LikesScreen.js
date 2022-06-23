import React from 'react';
import {View, StyleSheet, StatusBar, Text} from 'react-native';

export const LikesScreen = ({}) => {
    return (
        <View style={styles.container}>
            <Text>LikesScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03D2FF',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
