import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    token: ""
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = '';
        }
    }
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;

const tokenSelector = (state) => state.token;

export const selectToken = createSelector(
    tokenSelector,
    (token) => token.token
);