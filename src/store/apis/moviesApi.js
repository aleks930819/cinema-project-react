import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
  }),
  tagTypes: ['Movies'],
  endpoints(builder) {
    return {
      getMovies: builder.query({
        query: () => {
          return {
            url: '/movies',
            method: 'GET',
          };
        },
        providesTags: ['Movies'],
      }),

      addMovie: builder.mutation({
        query: ({ payload, userToken }) => {
          return {
            url: '/movies',
            method: 'POST',
            body: payload,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Movies'],
      }),

      removeMovie: builder.mutation({
        query: ({ id, userToken }) => {
          return {
            url: `/movies/${id}`,
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Movies'],
      }),

      updateMovie: builder.mutation({
        query: ({ data, id, userToken }) => {
          return {
            url: `/movies/${id}`,
            method: 'PATCH',
            body: data,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Movies'],
      }),
    };
  },
});

export const {
  useGetMoviesQuery,
  useAddMovieMutation,
  useRemoveMovieMutation,
  useUpdateMovieMutation,
} = moviesApi;
export { moviesApi };
