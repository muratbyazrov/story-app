import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./FormButton";
import {TitleText} from "../TitleText";
import {formSwitcher} from "../../../../../store/features/account/accountSlice";
import {useDispatch} from "react-redux";
import {styles} from "./forms-styles.js";

export const About = ({data}) => {
    const dispatch = useDispatch();
    const [about, onChangeAbout] = React.useState(data.about || 'Не указано');

    return (
        <View style={styles.form}>
            <TitleText text={`О себе`}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeAbout}
                value={about}
            />
            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('about'))}/>
                <FormButton text={'Сохранить'}/>
            </View>
        </View>
    )
}
