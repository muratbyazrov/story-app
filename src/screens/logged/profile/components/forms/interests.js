import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {TitleText} from "../TitleText";
import {formSwitcher} from "../../../../../store/features/account/accountSlice";
import {useDispatch} from "react-redux";
import {styles} from "./forms-styles.js";

export const Interests = ({data}) => {
    const dispatch = useDispatch();
    const [interests, onChangeInterests] = React.useState(data.interests || 'Не указано');

    return (
        <View style={styles.form}>
            <TitleText text={`Укажите интересы`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeInterests}
                value={interests}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('interests'))}/>
                <FormButton text={'Сохранить'}/>
            </View>
        </View>
    )
}
