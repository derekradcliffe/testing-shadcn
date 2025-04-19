import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  price: number;
  totalPrice: number;
  quantity: number;
}

interface CartState {
  itemList: CartItem[];
  totalQuantity: number;
  showCart: boolean;
}

const initialState: CartState = {
  itemList: [],
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.itemList.push({
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          id: newItem.id,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      const findItem = state.itemList.find(
        (item) => item.id === action.payload.id
      );
      if (!findItem) return;

      if (findItem.quantity === 1) {
        state.itemList = state.itemList.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    clearCart(state) {
      state.itemList = [];
    },
  },
});

export const { addToCart, removeFromCart, setShowCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
