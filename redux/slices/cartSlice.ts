import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza, Pizzas } from "../../types/pizzas";

export interface IProduct{
    id: number;
    imageUrl: string;
    title: string;
    type: string;
    size: number;
    price: number;
    count: number;
}

interface IInitialState{
    totalPrice: number;
    products: IProduct[];
}

const initialState: IInitialState = {
    totalPrice: 0,
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            const findItem = state.products.find(obj => {
                return obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type
            })
            if (findItem){
                console.log(action.payload.count)
                findItem.count += action.payload.count
            } else {
                state.products.push(action.payload)
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        }, 
        removeProduct: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter((product) => {
                console.log(product.id, product.type, product.size)
                if (product.id === action.payload.id && product.size === action.payload.size && product.type === action.payload.type){
                    return false
                } else {
                    return true
                }
            })
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        }, 
        clearProducts: (state) => {
            state.products = [];
            state.totalPrice = 0;
        }
    }
})

export default cartSlice.reducer

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions