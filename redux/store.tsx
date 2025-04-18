import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.tsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;