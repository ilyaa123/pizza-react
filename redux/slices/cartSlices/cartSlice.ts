import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialStateCart, IProduct, IProductDrink } from "./cartTypes";


const initialState: IInitialStateCart = {
    totalPrice: 0,
    products: [],
    productsDrink: []
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
                findItem.count += action.payload.count
            } else {
                state.products.push(action.payload)
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0) + state.productsDrink.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        }, 
        removeProduct: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter((product) => {
                if (product.id === action.payload.id && product.size === action.payload.size && product.type === action.payload.type){
                    return false
                } else {
                    return true
                }
            })
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0) + state.productsDrink.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        }, 
        clearProducts: (state) => {
            state.products = [];
            state.totalPrice = 0;
        },
        addDrink: (state, action: PayloadAction<IProductDrink>) => {
            const findItem = state.productsDrink.find(obj => {
                return obj.id === action.payload.id
            })
            if (findItem){
                findItem.count += action.payload.count
            } else {
                state.productsDrink.push(action.payload)
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0) + state.productsDrink.reduce((sum, obj) => {
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
            state.totalPrice = state.products.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0) + state.productsDrink.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        }, 
        clearDrinks: (state) => {
            state.productsDrink = [];
            state.totalPrice = 0;
        }
    }
})

export default cartSlice.reducer

export const { addProduct, removeProduct, clearProducts, addDrink, removeDrink, clearDrinks } = cartSlice.actions