import { createSlice } from "@reduxjs/toolkit";
import { fetchDrinks, fetchPizzas } from "./asyncThunk";
import {  IPizzaSlice } from "./productsTypes";

const initialState:IPizzaSlice = {
    pizzas: [],
    drinks: [],
    status: 'loading',
}

const productSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
                state.pizzas = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.status = 'success';
                state.pizzas = action.payload;
                console.log(state.pizzas)
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error';
                state.pizzas = [];
            })
            .addCase(fetchDrinks.pending, (state) => {
                state.status = 'loading';
                state.drinks = [];
            })
            .addCase(fetchDrinks.fulfilled, (state, action) => {
                state.status = 'success';
                state.drinks = action.payload;
            })
            .addCase(fetchDrinks.rejected, (state) => {
                state.status = 'error';
                state.drinks = [];            
            })
    }
    
})

export default productSlice.reducer