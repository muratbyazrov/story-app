import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: '1',
    },
    reducers: {
        updateUser: state => {
        },
        setAccountData: (state, action) => {
            state = action.payload;
            console.log(state)
        }
    }
});

export const {updateUser, setAccountData} = userSlice.actions;
export default userSlice.reducer;
