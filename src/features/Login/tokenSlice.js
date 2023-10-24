import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ""
};

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducer: {
        setToken: (state = initialState, action) => {
            state.value = action.payload;
        },
        removeToken: (state, action) => {
            return { value: "" }
        }
    }
});

export const { setToken, removeToken } = tokenSlice.actions;

export const selectToken = (state) => {
    return state.token.value;
}

export default tokenSlice.reducer;