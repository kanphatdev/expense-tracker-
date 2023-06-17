import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUri = 'http://localhost:1337/'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUri }),
    endpoints: builder => ({
        // get quiery
        getCategories: builder.query({
            query: () => '/api/categories-models'
        }),
        // get labels
        getLabels: builder.query({
            query: () => '/api/categories-models'
        }),
        // new transaction
        addTransaction:builder.mutation({
            query:(intialTransaction)=>({
                url:'/api/transacton-models',
                method:'POST',
                body:intialTransaction
            })

        }),
        // delete
        deleteaddTransaction:builder.mutation({
            query:recordId=>({
                url:'/api/transacton-models/',
                method:'DELETE',
                body:recordId

            })
        })

    })

})
export default apiSlice