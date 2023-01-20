import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchDrinks, fetchPizzas } from "./asyncThunk";
import { Drinks, FetchParams, IPizzaSlice, Pizzas } from "./productsTypes";

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
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
            state.pizzas = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = 'success';
            state.pizzas = action.payload
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = 'error';
            state.pizzas = [];
        });
        builder.addCase(fetchDrinks.pending, (state) => {
            state.status = 'loading';
            state.drinks = [];
        });
        builder.addCase(fetchDrinks.fulfilled, (state, action) => {
            state.status = 'success';
            state.drinks = action.payload
        });
        builder.addCase(fetchDrinks.rejected, (state) => {
            state.status = 'error';
            state.drinks = [];
        });
    }
})

export default productSlice.reducer