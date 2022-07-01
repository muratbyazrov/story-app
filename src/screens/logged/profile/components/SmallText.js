import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const SmallText = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 16,
    }
});
