import { createSlice } from '@reduxjs/toolkit';

export const searchTicket = createSlice({
  name: 'searchTicket',
  initialState: {
    searchQuery: '',
  },

  reducers: {
    searchForUserTickets: (state, action) => {
      console.log(action);
      state.searchQuery = action.payload;
    },
  },
});

export const { searchForUserTickets } = searchTicket.actions;
export default searchTicket.reducer;
