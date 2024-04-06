
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        credentials: {}
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logout: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        okRegister: (state) =>{
            return {
                ...state,
                isRegistered: true,
            }
        },
        notRegister: (state , action) =>{
            return {
                ...state,
                isRegistered: false,
                error: action.payload
            }
        },
    }

});

export const { login, logout, okRegister, notRegister } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;