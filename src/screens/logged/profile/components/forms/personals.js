import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {TitleText} from "../TitleText";
import {formSwitcher} from "../../../../../store/features/account/accountSlice";
import {useDispatch} from "react-redux";
import {styles} from "./forms-styles.js";

export const Personals = ({data}) => {
    const dispatch = useDispatch();
    const [personals, onChangePersonals] = React.useState(data.personals || 'Не указано');

    return (
        <View style={styles.form}>
            <TitleText text={`Личные данные`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangePersonals}
                value={personals}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('personals'))}/>
                <FormButton text={'Сохранить'}/>
            </View>
        </View>
    )
}
