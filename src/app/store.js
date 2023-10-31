import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from '../features/Login/tokenSlice';
import userReducer from '../features/User/userSlice';

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        user: userReducer
    }
})

export default store;