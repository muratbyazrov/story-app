import React from 'react';
import {Pressable} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Button() {
    return (
        <Pressable>
            <MaterialIcons name="arrow-forward-ios" size={32} color="gray" />
        </Pressable>
    );
}
