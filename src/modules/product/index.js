import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        isFailed: false,
        error: null,
        entities: {},
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
            state.isFailed = false;

            return state;
        },
        failedLoading: (state, { payload: { error } }) => {
            state.isLoading = false;
            state.isFailed = true;
            state.error = error;

            return state;
        },
        addProducts: (state, { payload: { products } }) => {
            return {
                ...state,
                isLoading: false,
                isFailed: false,
                entities: {
                    ...state.entities,
                    ...products,
                },
            }
        }
    }
});