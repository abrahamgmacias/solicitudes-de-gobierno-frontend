import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    firstName: "",
    lastName: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        clearFirstName: (state) => {
            state.firstName = "";
        },
        clearLastName: (state) => {
            state.lastName = "";
        }
    }
});

export const { setFirstName, setLastName, clearFirstName, clearLastName } = userSlice.actions;

export default userSlice.reducer;

const userSelector = (state) => state.user; 

export const selectFirstName = createSelector(
    userSelector,
    (user) => user.firstName
);
  
export const selectLastName = createSelector(
    userSelector,
    (user) => user.lastName
);