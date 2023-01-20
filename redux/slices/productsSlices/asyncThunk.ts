import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Drinks, FetchParams, Pizzas } from "./productsTypes";


export const fetchPizzas = createAsyncThunk<Pizzas, FetchParams>('pizzas/fechPizzas', async (params) => {
    const { sortBy, order, category, currentPage } = params;

    const { data } = await axios.get(`https://63c3a5d3a9085635752ac840.mockapi.io/items?page=${currentPage}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}`);

    return data;
})

export const fetchDrinks = createAsyncThunk<Drinks, FetchParams>('drinks/fechDrinks', async (params) => {
    const { sortBy, order, category, currentPage } = params;

    const { data } = await axios.get(`https://63c3a5d3a9085635752ac840.mockapi.io/drinks?page=${currentPage}&limit=8&category=${category}&sortBy=${sortBy}&order=${order}`);

    return data;
})