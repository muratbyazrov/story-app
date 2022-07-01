import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {formSwitcher, modifyAccount} from "../../../../../store/features/account/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./forms-styles.js";
import {servers} from "../../../../../servers";
import store from "../../../../../store/store";
import {FormTitle} from "./form-title";

export const Education = () => {
    const {education} = useSelector(state => state.account.accountData);
    const dispatch = useDispatch();
    const [educationHook, onChangeEducation] = React.useState(education || 'Не указано');

    const modifyAccountPress = async () => {
        const {data} = await servers.account.modifyAccount({education: educationHook})
        store.dispatch(modifyAccount(...data));
        dispatch(formSwitcher('education'));
    }

    return (
        <View style={styles.form}>
            <FormTitle text={`Образование`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEducation}
                placeholder={education}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('education'))}/>
                <FormButton text={'Сохранить'} onPress={() => modifyAccountPress()}/>
            </View>
        </View>
    )
}
