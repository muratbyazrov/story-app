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
            interest: false,
        }
    },
    reducers: {
        updateAccount: state => {
        },
        setAccountData: (state, action) => {
            state.accountData = action.payload;
        },
        formSwitcher: (state, action) => {
            state.formsActive[action.payload] = !state.formsActive[action.payload]
        }
    }
});

export const {updateAccount, setAccountData, formSwitcher} = accountSlice.actions;
export default accountSlice.reducer;
