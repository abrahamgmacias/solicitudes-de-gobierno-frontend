import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    role: ""
};

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        },
        clearRole: (state, action) => {
            state.role = null;
        }
    }
});

export const { setRole, clearRole } = roleSlice.actions;

export default roleSlice.reducer;

export const selectRole = (state) => {
    return state.role.role;
}

export const selectRoleValue = createSelector([selectRole], (role) => role);