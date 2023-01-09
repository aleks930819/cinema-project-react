import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ticketsApi = createApi({
  reducerPath: 'tickets',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
  }),
  tagTypes: ['Tickets'],
  endpoints(builder) {
    return {
      getTickets: builder.query({
        query: ({ userToken, searchQuery }) => {
          if (searchQuery) {
            return {
              url: `/tickets/search?name=${searchQuery}`,
              method: 'GET',
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${userToken}`,
              },
            };
          }

          return {
            url: '/tickets',
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },

        providesTags: ['Tickets'],
      }),

      getTicketsByUserId: builder.query({
        query: ({ userToken, id }) => {
          return {
            url: `/tickets/${id}`,
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },

        providesTags: ['Tickets'],
      }),

  

      addTicket: builder.mutation({
        query: ({ payload, userToken }) => {
          return {
            url: '/tickets',
            method: 'POST',
            body: payload,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Tickets'],
      }),

      removeTicket: builder.mutation({
        query: ({ id, userToken }) => {
          console.log(id);
          console.log(userToken);
          return {
            url: `/tickets/${id}`,
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              Authorization: `Bearer ${userToken}`,
            },
          };
        },
        invalidatesTags: ['Tickets'],
      }),
    };
  },
});

export const {
  useGetTicketsQuery,
  useGetTicketsByUserIdQuery,

  useAddTicketMutation,
  useRemoveTicketMutation,
} = ticketsApi;
export { ticketsApi };
