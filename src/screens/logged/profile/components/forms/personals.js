import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {formSwitcher, modifyAccount} from "../../../../../store/features/account/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./forms-styles.js";
import {servers} from "../../../../../servers";
import store from "../../../../../store/store";
import {FormTitle} from "./form-title";

export const Personals = () => {
    const {personals} = useSelector(state => state.account.accountData);
    const dispatch = useDispatch();
    const [personalsHook, onChangePersonals] = React.useState(personals || 'Не указано');

    const modifyAccountPress = async () => {
        const {data} = await servers.account.modifyAccount({personals: personalsHook})
        store.dispatch(modifyAccount(...data));
        dispatch(formSwitcher('job'));
    }

    return (
        <View style={styles.form}>
            <FormTitle text={`Личные данные`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangePersonals}
                placeholder={personals}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('personals'))}/>
                <FormButton text={'Сохранить'} onPress={() => modifyAccountPress()}/>
            </View>
        </View>
    )
}
