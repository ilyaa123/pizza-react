import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import pizzasSlice from "./slices/pizzasSlice";
import drinksSlice from "./slices/drinksSlice";
import cartDrinkSlice from "./slices/cartDrinkSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        pizzas: pizzasSlice,
        drinks: drinksSlice,
        cartDrink: cartDrinkSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store