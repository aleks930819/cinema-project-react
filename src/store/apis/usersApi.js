import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
  }),
  tagTypes: ['Users'],
  endpoints(builder) {
    return {
      getUsers: builder.query({
        query: ({ userToken }) => {
          console.log(userToken);
          return {
            url: '/users',
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        providesTags: ['Users'],
      }),

      removeUser: builder.mutation({
        query: ({ id, userToken }) => {
          return {
            url: `/users/${id}`,
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Users'],
      }),
    };
  },
});

export const { useGetUsersQuery, useRemoveUserMutation } = usersApi;
export { usersApi };
