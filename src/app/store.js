import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from '../features/Login/tokenSlice';

export const store = configureStore({
    reducer: {
        token: tokenReducer
    }
})

export default store;