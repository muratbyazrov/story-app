import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {TitleText} from "../TitleText";
import {formSwitcher} from "../../../../../store/features/account/accountSlice";
import {useDispatch} from "react-redux";
import {styles} from "./forms-styles.js";

export const Education = ({data}) => {
    const dispatch = useDispatch();
    const [education, onChangeEducation] = React.useState(data.education || 'Не указано');

    return (
        <View style={styles.form}>
            <TitleText text={`Образование`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEducation}
                value={education}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('education'))}/>
                <FormButton text={'Сохранить'}/>
            </View>
        </View>
    )
}
