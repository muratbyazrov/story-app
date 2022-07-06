import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const FormTitle = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'gray'
    }
});
