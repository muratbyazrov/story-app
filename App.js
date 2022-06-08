import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './src/store/store.js';
import {Provider} from 'react-redux';
import {StyleSheet} from "react-native";
import {LoggedApp} from "./src/screens/LoggedApp/LoggedApp";
import {AuthorizationStackScreen} from "./src/screens/login/AuthorizationStackScreen";

const Stack = createNativeStackNavigator();

function App() {
    const isLogin = () => {
        return !!store.getState().user.userData.userId
    }


    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Authorization" component={AuthorizationStackScreen}/>
                    <Stack.Screen name="Logged" component={LoggedApp}/>
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
