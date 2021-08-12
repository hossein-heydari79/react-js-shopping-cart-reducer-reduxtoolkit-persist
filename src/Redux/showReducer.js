import { createSlice } from '@reduxjs/toolkit'

const initial = {
    show: false
}

const ShowReducer = createSlice({
    name: "show",
    initialState: initial,
    reducers: {
        ToggleShow: (state, action) => {
            state.show = action.payload
        }
    }
})

export const { ToggleShow } = ShowReducer.actions
export default ShowReducer.reducer