import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchForUserTicketsReducer from '../features/searchTickets';
import { cinemasApi } from './apis/cinemasApi';
import { moviesApi } from './apis/moviesApi';
import { ticketsApi } from './apis/ticketsApi';
import { usersApi } from './apis/usersApi';

export const store = configureStore({
  reducer: {
    searchTicket: searchForUserTicketsReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [ticketsApi.reducerPath]: ticketsApi.reducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      moviesApi.middleware,
      ticketsApi.middleware,
      cinemasApi.middleware,
      usersApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export {
  useGetMoviesQuery,
  useAddMovieMutation,
  useRemoveMovieMutation,
  useUpdateMovieMutation,
} from './apis/moviesApi';

export {
  useGetTicketsQuery,
  useAddTicketMutation,
  useRemoveTicketMutation,
  useGetTicketsByUserIdQuery,
} from './apis/ticketsApi';

export {
  useGetCinemasQuery,
  useAddCinemaMutation,
  useRemoveCinemaMutation,
  useUpdateCinemaMutation,
} from './apis/cinemasApi';

export { useGetUsersQuery, useRemoveUserMutation } from './apis/usersApi';
