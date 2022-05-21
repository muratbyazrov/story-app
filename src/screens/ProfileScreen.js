import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ProfileScreen = ({}) => {
    return <View style={styles.center}>
        <Text>ProfileScreen</Text>
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