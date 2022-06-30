import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {TitleText} from "../TitleText";
import {formSwitcher} from "../../../../../store/features/account/accountSlice";
import {useDispatch} from "react-redux";
import {styles} from "./forms-styles.js";

export const Goal = ({data}) => {
    const dispatch = useDispatch();
    const [goal, onChangeGoal] = React.useState(data.goal || 'Не указано');

    return (
        <View style={styles.form}>
            <TitleText text={`Ваша цель`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeGoal}
                value={goal}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('goal'))}/>
                <FormButton text={'Сохранить'}/>
            </View>
        </View>
    )
}
