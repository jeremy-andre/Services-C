import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Item } from "../types";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Item>) {
      state.cart.push(action.payload);
    },
    popToCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, popToCart } = cartSlice.actions;
export default cartSlice.reducer;
