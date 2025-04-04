// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const incomingBook = action.payload;
      const existing = state.find(item => item.ID === incomingBook.ID);
    
      if (existing) {
        // 如果有 quantity 屬性，就更新為新的數量
        if (typeof incomingBook.quantity === 'number') {
          existing.quantity = incomingBook.quantity;
        } else {
          // 否則默認是加 1（例如從商店點加購）
          existing.quantity += 1;
        }
      } else {
        // 第一次加入，確保 quantity 存在（預設 1）
        state.push({ ...incomingBook, quantity: incomingBook.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.ID !== action.payload.ID);
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
