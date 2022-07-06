import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./form-components/FormButton";
import {formSwitcher, modifyAccount} from "../../../../../store/features/account/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./forms-styles.js";
import {servers} from "../../../../../servers";
import store from "../../../../../store/store";
import {FormTitle} from "./form-title";

export const Job = () => {
    const {job} = useSelector(state => state.account.accountData);
    const dispatch = useDispatch();
    const [jobHook, onChangeJob] = React.useState(job || 'Не указано');

    const modifyAccountPress = async () => {
        const {data} = await servers.account.modifyAccount({job: jobHook})
        store.dispatch(modifyAccount(...data));
        dispatch(formSwitcher('job'));
    }

    return (
        <View style={styles.form}>
            <FormTitle text={`Работа`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeJob}
                defaultValue={job}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('job'))}/>
                <FormButton text={'Сохранить'} onPress={() => modifyAccountPress()}/>
            </View>
        </View>
    )
}
