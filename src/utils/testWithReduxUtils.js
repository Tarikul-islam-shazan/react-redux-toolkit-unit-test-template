import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../store/slices/features/product/productsSlice";
import { productFormReducer } from "../store/slices/features/product/productFormSlice";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export function renderWithProviders(
    ui,{
        preloadedState ={},
        store = configureStore({
            reducer:{
                products: productsReducer,
                productForm: productFormReducer
            },
            preloadedState
        }),
        ...renderOptions
    } = {}
){
    function Wrapper({children}){
        return <Provider store={store}>{children}</Provider>
    }
    return {store ,...render(ui, {wrapper: Wrapper , ...renderOptions})}
}