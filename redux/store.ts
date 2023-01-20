import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlices/filterSlice";
import cartSlice from "./slices/cartSlices/cartSlice";
import productSlice from "./slices/productsSlices/productsSlice";
import { createWrapper } from "next-redux-wrapper";


export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        products: productSlice,
    }
})



export type AppStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

