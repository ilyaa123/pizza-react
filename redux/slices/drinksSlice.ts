import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Drinks, FetchParams } from "../../types/pizzas";

interface IPizzaSlice{
    drinks: Drinks;
    status: 'loading' | 'success' | 'error';
}

export const fetchDrinks = createAsyncThunk<Drinks, FetchParams>('drinks/fechDrinks', async (params) => {
    const { sortBy, order, category, currentPage } = params;

    const { data } = await axios.get(`https://63c3a5d3a9085635752ac840.mockapi.io/drinks?page=${currentPage}&limit=8&category=${category}&sortBy=${sortBy}&order=${order}`);

    return data;
})

const initialState:IPizzaSlice = {
    drinks: [],
    status: 'loading',
}

const drinksSlice = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
        
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchDrinks.pending, (state) => {
            state.status = 'loading';
            state.drinks = [];
        });
        builder.addCase(fetchDrinks.fulfilled, (state, action) => {
            state.status = 'success';
            state.drinks = action.payload
        })
        builder.addCase(fetchDrinks.rejected, (state) => {
            state.status = 'error';
            state.drinks = [];
        });
    }
})

export default drinksSlice.reducer

export const {} = drinksSlice.actions