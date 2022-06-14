import {createSlice} from '@reduxjs/toolkit';

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        accountData: {}
    },
    reducers: {
        updateAccount: state => {
        },
        setAccountData: (state, action) => {
            state.accountData = action.payload;
        }
    }
});

export const {updateAccount, setAccountData} = accountSlice.actions;
export default accountSlice.reducer;
