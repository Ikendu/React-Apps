import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cart/cartSlice";
import ModelReducer from "./features/model/modelSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    model: ModelReducer,
  },
});
