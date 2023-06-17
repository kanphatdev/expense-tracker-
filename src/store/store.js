import { configureStore } from '@reduxjs/toolkit';
import { expenSlice } from './reducer'
import { apiSlice } from './apiSlice'

export const store = configureStore({
    reducer:{
        expense:expenSlice,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware)
})