import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const LoginStack = createNativeStackNavigator();

export const LoginStackScreen = ({navigation}) => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name={'Welcome'} component={WelcomeScreen}/>
            <LoginStack.Screen name={'Authorization'} component={AuthorizationScreen}/>
            <LoginStack.Screen name={'Authorization'} component={AuthorizationScreen}/>
        </LoginStack.Navigator>
    )

}
