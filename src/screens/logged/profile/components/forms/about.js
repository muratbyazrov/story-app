import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {formSwitcher, modifyAccount} from "../../../../../store/features/account/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./forms-styles.js";
import {servers} from "../../../../../servers";
import store from "../../../../../store/store";
import {FormTitle} from "./form-title";

export const About = () => {
    const {about} = useSelector(state => state.account.accountData);
    const dispatch = useDispatch();
    const [aboutHook, onChangeAbout] = React.useState(about || 'Не указано');

    const modifyAccountPress = async () => {
        const {data} = await servers.account.modifyAccount({about: aboutHook})
        store.dispatch(modifyAccount(...data));
        dispatch(formSwitcher('about'));
    }

    return (
        <View style={styles.form}>
            <FormTitle text={`О себе`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeAbout}
                placeholder={about}
            />
            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('about'))}/>
                <FormButton text={'Сохранить'} onPress={() => modifyAccountPress()}/>
            </View>
        </View>
    )
}
