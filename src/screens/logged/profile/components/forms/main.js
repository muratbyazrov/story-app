import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./form-components/FormButton";
import {formSwitcher, modifyAccount} from "../../../../../store/features/account/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./forms-styles.js";
import {servers} from "../../../../../servers";
import store from "../../../../../store/store";
import {FormTitle} from "./form-title";

export const Main = () => {
    const {firstName, birthday, gender, city} = useSelector(state => state.account.accountData);

    const dispatch = useDispatch();
    const [firstNameHook, onChangeFirstName] = React.useState(firstName || 'Не указано');
    const [birthdayHook, onChangeBirthday] = React.useState(birthday || 'Не указано');
    const [genderHook, onChangeGender] = React.useState(gender || 'Не указано');
    const [cityHook, onChangeCity] = React.useState(city || 'Не указано');

    const modifyAccountPress = async () => {
        const {data} = await servers.account.modifyAccount({
            firstName: firstNameHook, birthday: birthdayHook, gender: genderHook, city: cityHook
        });
        store.dispatch(modifyAccount(...data));
        dispatch(formSwitcher('main'));
    }

    return (
        <View style={styles.form}>
            <FormTitle text={`Имя`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeFirstName}
                defaultValue={firstName}
            />

            <FormTitle text={`Дата рождения`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeBirthday}
                defaultValue={birthday}
            />

            <FormTitle text={`Пол`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeGender}
                defaultValue={gender}
            />

            <FormTitle text={`Город`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeCity}
                defaultValue={city}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('main'))}/>
                <FormButton text={'Сохранить'} onPress={() => modifyAccountPress()}/>
            </View>
        </View>
    )
}
