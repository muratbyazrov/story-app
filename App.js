import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChatsStackScreen, ProfileScreen} from './src/screens'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import store from './src/store/store.js';
import {Provider} from 'react-redux';
import {StyleSheet} from "react-native";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='Chats'
                    barStyle={styles.bottomBar}>
                    <Stack.Screen name="Chats" component={ChatsStackScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: 'white'
    },
});

export default App;
