import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlices/filterSlice";
import cartSlice from "./slices/cartSlices/cartSlice";
import productSlice from "./slices/productsSlices/productsSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        products: productSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store