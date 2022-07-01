import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {formSwitcher, modifyAccount} from "../../../../../store/features/account/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./forms-styles.js";
import {servers} from "../../../../../servers";
import store from "../../../../../store/store";
import {FormTitle} from "./form-title";

export const Goal = () => {
    const {goal} = useSelector(state => state.account.accountData);
    const dispatch = useDispatch();
    const [goalHook, onChangeGoal] = React.useState(goal || 'Не указано');

    const modifyAccountPress = async () => {
        const {data} = await servers.account.modifyAccount({goal: goalHook})
        store.dispatch(modifyAccount(...data));
        dispatch(formSwitcher('goal'));
    }

    return (
        <View style={styles.form}>
            <FormTitle text={`Ваша цель`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeGoal}
                placeholder={goal}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('goal'))}/>
                <FormButton text={'Сохранить'} onPress={() => modifyAccountPress()}/>
            </View>
        </View>
    )
}
