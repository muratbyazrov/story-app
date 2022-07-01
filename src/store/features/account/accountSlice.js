import {createSlice} from '@reduxjs/toolkit';

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        accountData: {},
        formsActive: {
            main: false,
            job: false,
            education: false,
            goal: false,
            about: false,
            personals: false,
            interests: false,
        }
    },
    reducers: {
        modifyAccount: (state, action) => {
            state.accountData = {...state.accountData, ...action.payload};
        },
        setAccountData: (state, action) => {
            state.accountData = {...state.accountData, ...action.payload};
        },
        formSwitcher: (state, action) => {
            state.formsActive[action.payload] = !state.formsActive[action.payload];
        }
    }
});

export const {modifyAccount, setAccountData, formSwitcher} = accountSlice.actions;
export default accountSlice.reducer;
