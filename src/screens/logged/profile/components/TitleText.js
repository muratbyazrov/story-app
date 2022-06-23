import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const TitleText = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'gray',
        fontSize: 20,
    }
});
