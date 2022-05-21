import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatsStackScreen, ProfileScreen} from './src/screens'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Chats'>
                <Stack.Screen name="Chats" component={ChatsStackScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;