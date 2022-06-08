import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: {}
    },
    reducers: {
        updateUser: state => {
        },
        setAccountData: (state, action) => {
            state.userData = action.payload;
        }
    }
});

export const {updateUser, setAccountData} = userSlice.actions;
export default userSlice.reducer;
