// CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); 
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          // Remove item if quantity is 1
          state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        } else {
          item.quantity -= 1;
        }
        
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;