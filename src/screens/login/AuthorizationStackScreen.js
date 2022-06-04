import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from "./WelcomeScreen";
import {LoginScreen} from "./LoginScreen";

const AuthorizationStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

export const AuthorizationStackScreen = ({navigation}) => {
    return (
    <AuthorizationStack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
    </AuthorizationStack.Navigator>
    )
}

