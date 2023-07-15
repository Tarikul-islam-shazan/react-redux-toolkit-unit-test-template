import { createSlice } from "@reduxjs/toolkit"
import { addProduct } from "./productsSlice";

const initialState = {
    productName: '',
    price: 0.00
}

const productFormSlice = createSlice({
    name: 'productForm',
    initialState,
    reducers: {
        changeProductName: (state, action) =>{
            state.productName = action.payload;
        },
        changePrice: (state, action) =>{
            state.price = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(addProduct, (state, action)=> {
            state.productName = '';
            state.price = 0.00
        })
    }
});

export const {changeProductName,changePrice} = productFormSlice.actions;
export const productFormReducer = productFormSlice.reducer