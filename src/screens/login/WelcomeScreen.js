import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Button from "./components/Button";

export const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeTitle}>Добро пожаловать в Story</Text>
            <Text style={styles.welcomeSubtitle}>
                Story всегда будет бесплатным
                Не нужно платить за просмотр лайков или за свайпы
                Вы не увидите никаких раздражающих рекламных роликов
            </Text>
            <Button
                onPress={() => navigation.navigate('LoginScreen')}
                title={'Войти'}
            />

            <Button
                title={'Регистрация'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03D2FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    welcomeSubtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});
