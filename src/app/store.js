import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from '../features/Login/tokenReducer';

export const store = configureStore({
    reducer: {
        token: tokenReducer
    }
})