import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import shelfReducer from './shelfSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shelf: shelfReducer,
  },
});
