import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "../features/Login/roleSlice";
import tokenReducer from '../features/Login/tokenSlice';
import userReducer from '../features/User/userSlice';

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        user: userReducer,
        role: roleReducer
    }
})

export default store;