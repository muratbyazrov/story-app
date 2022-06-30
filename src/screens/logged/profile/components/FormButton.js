import React from 'react';
import {Pressable, Text} from 'react-native';

export default function FormButton({text, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <Text>{text}</Text>
        </Pressable>
    );
}
