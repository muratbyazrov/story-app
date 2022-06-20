import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreen} from "./WelcomeScreen";
import {LoginScreen} from "./LoginScreen";

const LoginStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

export const Login = ({navigation}) => {
    return (
        <LoginStack.Navigator
            initialRouteName={'WelcomeScreen'}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        </LoginStack.Navigator>
    )
}

