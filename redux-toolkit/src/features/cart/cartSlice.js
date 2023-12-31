import { createSlice } from "@reduxjs/toolkit";

import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      //return { cartItems: [] };
    },
    restore: (state) => {
      state.cartItems = cartItems;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      //console.log(action.payload);
    },
    increaseBtn: (state, { payload }) => {
      const itemId = payload.id;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount += 1;
    },
    decreaseBtn: (state, { payload }) => {
      const itemId = payload.id;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount -= 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  clearCart,
  restore,
  removeItem,
  increaseBtn,
  decreaseBtn,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
