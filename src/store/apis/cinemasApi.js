import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cinemasApi = createApi({
  reducerPath: 'cinemas',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
  }),
  tagTypes: ['Cinemas'],
  endpoints(builder) {
    return {
      getCinemas: builder.query({
        query: () => {
          return {
            url: '/cinemas',
            method: 'GET',
          };
        },
        providesTags: ['Cinemas'],
      }),

      addCinema: builder.mutation({
        query: ({ payload, userToken }) => {
          return {
            url: '/cinemas',
            method: 'POST',
            body: payload,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Cinemas'],
      }),

      removeCinema: builder.mutation({
        query: ({ id, userToken }) => {
          return {
            url: `/cinemas/${id}`,
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Cinemas'],
      }),

      updateCinema: builder.mutation({
        query: ({ data, id, userToken }) => {
          return {
            url: `/cinemas/${id}`,
            method: 'PATCH',
            body: data,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Cinemas'],
      }),
    };
  },
});

export const {
  useGetCinemasQuery,
  useAddCinemaMutation,
  useRemoveCinemaMutation,
  useUpdateCinemaMutation,
} = cinemasApi;
export { cinemasApi };
