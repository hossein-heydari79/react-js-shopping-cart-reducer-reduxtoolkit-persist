import { createSlice } from '@reduxjs/toolkit'

const initial = {
    price: "lowest",
    size: "ALL"
}

const FilterReducer = createSlice({
    name: "filter",
    initialState: initial,
    reducers: {
        AddPrice: (state, action) => {
            state.price = action.payload
        },
        AddSize: (state, action) => {
            state.size = action.payload
        }
    }
})

export const { AddPrice, AddSize } = FilterReducer.actions
export default FilterReducer.reducer