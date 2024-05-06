import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartItems {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  };
}
// Define a type for the slice state
interface cartSliceType {
  cartItems: Array<cartItems>
}

// Define the initial state using that type
const initialState: cartSliceType = {
  cartItems : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<cartItems>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id 
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<cartItems["id"]>) => {
      const filterCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = filterCartItems;
     
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
  }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer