import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: '1',
    },
    reducers: {
        updateUser: state => {
        }
    }
});

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;