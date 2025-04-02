import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/CartSlice"; // Cart Reducer Import

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
