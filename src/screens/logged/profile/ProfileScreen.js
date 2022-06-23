import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Image, StatusBar} from 'react-native';
import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');

import {useSelector} from "react-redux";
import {TitleText} from "./components/TitleText";
import {SubtitleText} from "./components/SubtitleText";
import Button from "./components/Button";


export const ProfileScreen = ({}) => {
    const accountData = useSelector(state => state.account.accountData);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image style={styles.image} source={{uri: accountData.photoUrl}}/>
                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Основное'}/>
                        <SubtitleText text={`${accountData.firstName}, ${accountData.age} лет`}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Работа'}/>
                        <SubtitleText text={`${accountData.firstName}, ${accountData.age} лет`}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Образование'}/>
                        <SubtitleText text={`${accountData.firstName}, ${accountData.age} лет`}/>
                    </View>
                    <Button/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Образование'}/>
                        <SubtitleText text={`${accountData.firstName}, ${accountData.age} лет`}/>
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
        width: screen.width - 40,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 400,
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
