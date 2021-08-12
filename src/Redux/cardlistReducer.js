import { createSlice } from '@reduxjs/toolkit'

const CardListReducer = createSlice({
    name: "cardlist",
    initialState: [],
    reducers: {
        addCardList: (state, action) => {
            state.push(action.payload)
        }
        ,
        increaseConut: (state, action) => {
            state[action.payload].count++
        },
        decreaseCount: (state, action) => {
            state[action.payload].count--
        },
        spliceCardList: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})

export const { addCardList, increaseConut, decreaseCount, spliceCardList } = CardListReducer.actions

export default CardListReducer.reducer