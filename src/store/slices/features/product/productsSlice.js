import { createSlice,nanoid } from "@reduxjs/toolkit";

export const initialState ={
    data: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct : (state, action) => {
            state.data.push({
                productName: action.payload.productName,
                price: action.payload.price,
            })
        }
    }

});

export const {addProduct} = productsSlice.actions;
export const productsReducer = productsSlice.reducer