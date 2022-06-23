import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Image, StatusBar} from 'react-native';
import {useSelector} from "react-redux";
import {TitleText, SubtitleText, Button, SmallText} from './components'

import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');

export const ProfileScreen = ({}) => {
    const {
        firstName,
        birthday,
        photoUrl,
        job,
        education,
        goal,
        about,
        height,
        weight,
    } = useSelector(state => state.account.accountData);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image style={styles.image} source={{uri: photoUrl}}/>
                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Основное'}/>
                        <SubtitleText
                            text={`${firstName}, ${new Date().getFullYear() - new Date(birthday).getFullYear()} лет`}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Работа'}/>
                        <SubtitleText text={`${job || 'не указано'}`}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Образование'}/>
                        <SubtitleText text={`${education || 'не указано'}`}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Цель'}/>
                        <SubtitleText text={`${goal || 'не указано'}`}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Обо мне'}/>
                        <SubtitleText text={`${about || 'не указано'}`}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Личные данные'}/>
                        <SmallText text={height ? `Рост: ${height} см` : 'Рост: не указано'}/>
                        <SmallText text={weight ? `Вес: ${height} кг` : 'Вес: не указано'}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Интересы'}/>
                        <SubtitleText text={`${job || 'не указано'}`}/>
                    </View>
                    <Button/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03D2FF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight + 15,
    },
    scrollView: {
        flexGrow: 1,
        width: screen.width - 30,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 430,
    },
    accountDataView: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
    }
});
