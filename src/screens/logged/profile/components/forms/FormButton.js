import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

export default function FormButton({text, onPress}) {
    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <Text>{text}</Text>
        </Pressable>
    );
}

export const styles = StyleSheet.create({
    pressable: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 40,
        borderWidth: 1
    },
});
