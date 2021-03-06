import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MessagesScreen} from "./MessagesScreen";
import {ChatsScreen} from "./ChatsScreen";
// store
import {useDispatch} from "react-redux";
import {setChats} from "../../../store/features/messages/messagesSlice";
import {servers} from "../../../servers";

const ChatsStack = createNativeStackNavigator();
export const ChatsStackScreen = ({navigation}) => {
    const dispatch = useDispatch();
    navigation.addListener('tabPress', () => {
        servers.messenger.getChats()
            .then(chats => {
                dispatch(setChats(chats));
            })
            .catch(err => {
                console.log('ChatsStackScreenError:', err)
            })
    });

    return (
        <ChatsStack.Navigator initialRouteName='Chats'>
            <ChatsStack.Screen name='Chats' component={ChatsScreen}/>
            <ChatsStack.Screen name='Messages' component={MessagesScreen}/>
        </ChatsStack.Navigator>
    )
}
