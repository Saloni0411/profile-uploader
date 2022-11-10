import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (user) => {
        return {
            url: 'create-user',
            method: 'POST',
            body: user
        }
      }
    }),

    getDetails: builder.query({
        query: () => {
            return {
                url: 'get-users',
                method: 'GET'
            }
        }
    })
  }),

})

export const { useCreateMutation, useGetDetailsQuery} = userAPI