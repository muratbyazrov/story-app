import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Image, StatusBar} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {TitleText, SubtitleText, Button, SmallText} from './components'

import {Dimensions} from 'react-native';
import {About, Education, Goal, Interests, Job, Main, Personals} from "./components/forms";
import {formSwitcher} from "../../../store/features/account/accountSlice";

const screen = Dimensions.get('window');

export const ProfileScreen = () => {
    const dispatch = useDispatch();
    const accountData = useSelector(state => state.account.accountData);
    const {firstName, birthday, photoUrl, job, education, goal, about, height, weight, interests} = accountData;
    const forms = useSelector(state => state.account.formsActive);

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
                    <Button onPress={() => dispatch(formSwitcher('main'))}/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Работа'}/>
                        <SubtitleText text={`${job || 'не указано'}`}/>
                    </View>
                    <Button onPress={() => dispatch(formSwitcher('job'))}/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Образование'}/>
                        <SubtitleText text={`${education || 'не указано'}`}/>
                    </View>
                    <Button onPress={() => dispatch(formSwitcher('education'))}/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Цель'}/>
                        <SubtitleText text={`${goal || 'не указано'}`}/>
                    </View>
                    <Button onPress={() => dispatch(formSwitcher('goal'))}/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Обо мне'}/>
                        <SubtitleText text={`${about || 'не указано'}`}/>
                    </View>
                    <Button onPress={() => dispatch(formSwitcher('about'))}/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Личные данные'}/>
                        <SmallText text={height ? `Рост: ${height} см` : 'Рост: не указано'}/>
                        <SmallText text={weight ? `Вес: ${weight} кг` : 'Вес: не указано'}/>
                    </View>
                    <Button onPress={() => dispatch(formSwitcher('personals'))}/>
                </View>

                <View style={styles.accountDataView}>
                    <View>
                        <TitleText text={'Интересы'}/>
                        <SubtitleText text={`${interests || 'не указано'}`}/>
                    </View>
                    <Button onPress={() => dispatch(formSwitcher('interests'))}/>
                </View>
            </ScrollView>

            {forms.main && <Main/>}
            {forms.education && <Education/>}
            {forms.job && <Job/>}
            {forms.interests && <Interests/>}
            {forms.goal && <Goal/>}
            {forms.about && <About/>}
            {forms.personals && <Personals/>}
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
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    }
});
