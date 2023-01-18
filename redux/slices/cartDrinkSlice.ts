import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza, Pizzas } from "../../types/pizzas";

export interface IProductDrink{
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    count: number;
}

interface IInitialState{
    totalPriceDrink: number;
    productsDrink: IProductDrink[];
}

const initialState: IInitialState = {
    totalPriceDrink: 0,
    productsDrink: []
}

const cartDrinkSlice = createSlice({
    name: 'cartDrink',
    initialState,
    reducers: {
        addDrink: (state, action: PayloadAction<IProductDrink>) => {
            const findItem = state.productsDrink.find(obj => {
                return obj.id === action.payload.id
            })
            if (findItem){
                findItem.count += action.payload.count
            } else {
                state.productsDrink.push(action.payload)
            }
            state.totalPriceDrink = state.productsDrink.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        }, 
        removeDrink: (state, action: PayloadAction<IProductDrink>) => {
            state.productsDrink = state.productsDrink.filter((product) => {
                if (product.id === action.payload.id){
                    return false
                } else {
                    return true
                }
            })
            state.totalPriceDrink = state.productsDrink.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        }, 
        clearDrinks: (state) => {
            state.productsDrink = [];
            state.totalPriceDrink = 0;
        }
    }
})

export default cartDrinkSlice.reducer

export const { addDrink, removeDrink, clearDrinks } = cartDrinkSlice.actions