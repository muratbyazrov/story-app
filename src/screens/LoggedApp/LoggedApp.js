import * as React from 'react';
import {ChatsStackScreen} from "../messages/ChatsStackScreen";
import {ProfileScreen} from "../profile/ProfileScreen";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StyleSheet} from "react-native";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const LoggedApp = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName='ChatsStack'
            barStyle={styles.bottomBar}>
            <Stack.Screen name="ChatsStack" component={ChatsStackScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: 'white'
    },
});
