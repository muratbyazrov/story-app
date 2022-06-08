import React, {useRef} from 'react';
import {SafeAreaView, View, StyleSheet, Text, TextInput} from 'react-native';
import Button from "./components/Button";
import {servers} from "../../servers";

export const LoginScreen = ({navigation}) => {
    const [login, onChangeLogin] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    const signIn = async () => {
        await servers.account.signIn({login, password});
        navigation.navigate('Logged');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Логин и пароль</Text>
            <SafeAreaView SafeAreaView style={styles.safeAreaView}>
                <TextInput
                    value={'Murat'}
                    autoFocus={true}
                    style={styles.input}
                    onChangeText={onChangeLogin}
                    placeholder="Введите логин"
                />

                <TextInput
                    value={'Byazrov'}
                    autoFocus={true}
                    style={styles.input}
                    onChangeText={onChangePassword}
                    placeholder="Введите пароль"
                />
            </SafeAreaView>
            <Button
                title={'Войти'}
                onPress={() => signIn()}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03D2FF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    safeAreaView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 70,
        margin: 5,
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        fontSize: 20
    },
    text: {
        fontSize: 32,
        color: 'white',
        margin: 20
    }
});
