import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import productsReducer from "./features/users/productsSlice";
import authReducer from './features/users/authSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        products: productsReducer,
    },
})