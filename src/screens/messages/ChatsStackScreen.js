import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";

const ChatsStack = createNativeStackNavigator();
import {MessagesScreen} from "./MessagesScreen";
import {ChatsScreen} from "./ChatsScreen";

export const ChatsStackScreen = () => {
    return (
        <ChatsStack.Navigator initialRouteName='Chats'>
            <ChatsStack.Screen name='Chats' component={ChatsScreen}/>
            <ChatsStack.Screen name='Messages' component={MessagesScreen}/>
        </ChatsStack.Navigator>
    )
}