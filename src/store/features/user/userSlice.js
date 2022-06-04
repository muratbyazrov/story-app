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
            console.log(5555555555, state.userData);
        }
    }
});

export const {updateUser, setAccountData} = userSlice.actions;
export default userSlice.reducer;
