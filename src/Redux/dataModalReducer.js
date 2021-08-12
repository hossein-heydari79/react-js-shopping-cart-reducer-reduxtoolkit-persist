import { createSlice } from '@reduxjs/toolkit'

const initial = {
    url: "",
    id: "",
    title: "",
    des: "",
    price: "",
    sizes: []
}


const DataModalReducer = createSlice({
    name: "dataModal",
    initialState: initial,
    reducers: {
        addDataModal: (state, action) => {
            state.url = action.payload.url;
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.des = action.payload.des;
            state.price = action.payload.price;
            state.sizes = []
        }
    }
})


export const { addDataModal } = DataModalReducer.actions
export default DataModalReducer.reducer