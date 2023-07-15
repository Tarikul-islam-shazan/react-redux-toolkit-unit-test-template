import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/features/product/productsSlice";
import { productFormReducer } from "./slices/features/product/productFormSlice";

export const store = configureStore({
    reducer:{
        products: productsReducer,
        productForm: productFormReducer
    }
});
