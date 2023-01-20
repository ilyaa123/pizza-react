import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISort, IStateFilter } from "./filterTypes";

const initialState: IStateFilter = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности (DESC)',
        sortProperty: 'rating'
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action:PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSort: (state, action:PayloadAction<ISort>) => {
            state.sort = action.payload
        },
        setCurrentPage: (state, action:PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    }
})

export default filterSlice.reducer

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions