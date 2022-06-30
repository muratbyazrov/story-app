import React from 'react';
import {Pressable} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Button({onPress}) {
    return (
        <Pressable onPress={onPress}>
            <MaterialIcons name="arrow-forward-ios" size={32} color="gray" />
        </Pressable>
    );
}
