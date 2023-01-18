import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchParams, Pizzas } from "../../types/pizzas";

interface IPizzaSlice{
    items: Pizzas;
    status: 'loading' | 'success' | 'error';
}

export const fetchPizzas = createAsyncThunk<Pizzas, FetchParams>('pizzas/fechPizzas', async (params) => {
    const { sortBy, order, category, currentPage } = params;

    const { data } = await axios.get(`https://63c3a5d3a9085635752ac840.mockapi.io/items?page=${currentPage}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}`);

    return data;
})

const initialState:IPizzaSlice = {
    items: [],
    status: 'loading',
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading';
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        });
    }
})

export default pizzasSlice.reducer

export const {} = pizzasSlice.actions