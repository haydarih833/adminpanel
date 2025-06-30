import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import productsReducer from "./features/users/productsSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer,
    },
})