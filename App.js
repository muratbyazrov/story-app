import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store/store.js';
import {Provider} from 'react-redux';
import {StyleSheet} from "react-native";
import {Logged} from "./src/screens/logged/Logged";
import {Login} from "./src/screens/login/Login";

const Stack = createNativeStackNavigator();

function App() {
    const initialRouteName = store.getState().account.accountData.accountId ? 'Logged' : 'Login1';

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={initialRouteName}
                    screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Logged" component={Logged}/>
                </Stack.Navigator>
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
