import * as React from 'react';

import {ChatsStackScreen} from "./messages/ChatsStackScreen";
import {ProfileScreen} from "./profile/ProfileScreen";
import {LikesScreen} from "./likes/LikesScreen";
import {SwipesScreen} from "./swipes/SwipesScreen";

import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StyleSheet} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Logged = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName='ChatsStack'
            barStyle={styles.bottomBar}>



            <Stack.Screen
                options={{
                    tabBarLabel: 'Профиль',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" color={color} size={26}/>
                }}
                name="Profile"
                component={ProfileScreen}/>



            <Stack.Screen
                options={{
                    tabBarLabel: 'Симпатии',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="heart" color={color} size={26}/>
                }}
                name="Likes"
                component={LikesScreen}/>



            <Stack.Screen
                options={{
                    tabBarLabel: 'Сообщения',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="android-messages" color={color} size={26}/>
                }}
                name="ChatsStack"
                component={ChatsStackScreen}/>


            <Stack.Screen
                options={{
                    tabBarLabel: 'Свайпы',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="gesture-swipe" color={color} size={26}/>
                }}
                name="Swipes"
                component={SwipesScreen}/>

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: 'white'
    },
});
