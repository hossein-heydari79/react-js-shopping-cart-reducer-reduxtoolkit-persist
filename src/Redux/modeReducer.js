import { createSlice } from '@reduxjs/toolkit'

const initial = {
    show: false
}


const ModeReducer = createSlice({
    name: "mode",
    initialState: initial,
    reducers: {
        True: (state, action) => {
            state.show = action.payload
        }
    }
})

export const { True } = ModeReducer.actions
export default ModeReducer.reducer