import React from 'react';
import {View, TextInput} from 'react-native';
import FormButton from "./form-components/FormButton";
import {formSwitcher, modifyAccount} from "../../../../../store/features/account/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "./forms-styles.js";
import {servers} from "../../../../../servers";
import store from "../../../../../store/store";
import {FormTitle} from "./form-title";
import {Slider} from '@miblanchard/react-native-slider';
import {TitleText} from "../TitleText";
import {SubtitleText} from "../SubtitleText";

export const Personals = () => {
    const {height, weight} = useSelector(state => state.account.accountData);
    const dispatch = useDispatch();
    const [heightHook, onChangeHeight] = React.useState(height || 'Не указано');
    const [weightHook, onChangeWeight] = React.useState(weight || 'Не указано');

    const modifyAccountPress = async () => {
        const height = typeof heightHook === 'object' ? +heightHook[0] : +heightHook;
        const weight = typeof heightHook === 'object' ? +weightHook[0] : +weightHook;
        const {data} = await servers.account.modifyAccount({height, weight});
        store.dispatch(modifyAccount(...data));
        dispatch(formSwitcher('personals'));
    }

    return (
        <View style={styles.form}>
            <SubtitleText text={'Личные данные'}/>
            <FormTitle text={`Рост`}/>
            <TitleText text={`${heightHook} см`}/>
            <Slider
                minimumValue={50}
                maximumValue={220}
                step={1}
                minimumTrackTintColor={'#03D2FF'}
                thumbTintColor={'#03D2FF'}
                value={height}
                onValueChange={onChangeHeight}
            />

            <FormTitle text={`Вес`}/>
            <TitleText text={`${weightHook} кг`}/>
            <Slider
                maximumValue={210}
                step={1}
                minimumTrackTintColor={'#03D2FF'}
                thumbTintColor={'#03D2FF'}
                value={weight}
                onValueChange={onChangeWeight}
            />

            <View style={styles.buttonContainer}>
                <FormButton text={'Отменить'} onPress={() => dispatch(formSwitcher('personals'))}/>
                <FormButton text={'Сохранить'} onPress={() => modifyAccountPress()}/>
            </View>
        </View>
    )
}
