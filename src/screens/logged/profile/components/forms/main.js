import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {TitleText} from "../TitleText";
import {formSwitcher} from "../../../../../store/features/account/accountSlice";
import {useDispatch} from "react-redux";
import {styles} from "./forms-styles.js";

export const Main = ({data}) => {
    const dispatch = useDispatch();
    const [firstName, onChangeFirstName] = React.useState(data.firstName || 'Не указано');
    const [birthday, onChangeBirthday] = React.useState(data.birthday || 'Не указано');
    const [gender, onChangeGender] = React.useState(data.gender || 'Не указано');
    const [city, onChangeCity] = React.useState(data.city || 'Не указано');

    return (
        <View style={styles.form}>
            <TitleText text={`Имя`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeFirstName}
                value={firstName}
            />

            <TitleText text={`Дата рождения`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeBirthday}
                value={birthday}
            />

            <TitleText text={`Пол`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeGender}
                value={gender}
            />

            <TitleText text={`Местоположения`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeCity}
                value={city}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('main'))}/>
                <FormButton text={'Сохранить'}/>
            </View>
        </View>
    )
}
