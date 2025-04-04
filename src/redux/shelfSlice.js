import { createSlice } from '@reduxjs/toolkit';

const shelfSlice = createSlice({
  name: 'shelf',
  initialState: [],
  reducers: {
    addToShelf: (state, action) => {
      if (!state.find(book => book.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromShelf: (state, action) =>
      state.filter(book => book.id !== action.payload.id),
  },
});

export const { addToShelf, removeFromShelf } = shelfSlice.actions;
export default shelfSlice.reducer;
