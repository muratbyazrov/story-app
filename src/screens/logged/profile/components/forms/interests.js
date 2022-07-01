import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {formSwitcher, modifyAccount} from "../../../../../store/features/account/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./forms-styles.js";
import {servers} from "../../../../../servers";
import store from "../../../../../store/store";
import {FormTitle} from "./form-title";

export const Interests = () => {
    const {interests} = useSelector(state => state.account.accountData);
    const dispatch = useDispatch();
    const [interestsHook, onChangeInterests] = React.useState(interests || 'Не указано');

    const modifyAccountPress = async () => {
        const {data} = await servers.account.modifyAccount({interests: interestsHook})
        store.dispatch(modifyAccount(...data));
        dispatch(formSwitcher('interests'));
    }

    return (
        <View style={styles.form}>
            <FormTitle text={`Укажите интересы`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeInterests}
                placeholder={interests}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('interests'))}/>
                <FormButton text={'Сохранить'} onPress={() => modifyAccountPress()}/>
            </View>
        </View>
    )
}
