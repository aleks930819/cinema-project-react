import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
  }),
  endpoints(builder) {
    return {
      getMovies: builder.query({
        query: () => {
          return {
            url: '/movies',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetMoviesQuery } = moviesApi;
export { moviesApi };
