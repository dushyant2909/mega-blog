import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            console.log("After login:", state.status);
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            console.log("After logout:", state.status);
            console.log("After logout-userData:", state.userData);
        },
    },
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
