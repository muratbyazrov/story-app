import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const SubtitleText = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        marginBottom: 10
    }
});
