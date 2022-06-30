import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {TitleText} from "../TitleText";
import {formSwitcher} from "../../../../../store/features/account/accountSlice";
import {useDispatch} from "react-redux";
import {styles} from "./forms-styles.js";

export const Job = ({data}) => {
    const dispatch = useDispatch();
    const [job, onChangeJob] = React.useState(data.job || 'Не указано');

    return (
        <View style={styles.form}>
            <TitleText text={`Работа`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeJob}
                value={job}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('job'))}/>
                <FormButton text={'Сохранить'}/>
            </View>
        </View>
    )
}
