/// <reference types="vite/client" />

import { cartItems } from "./redux/reducer/CartSlice";
import { Product } from "./redux/reducer/ProductSlice";

interface PersistedState {
    _persist: {
      version: number;
      rehydrated: boolean;
      // Add any other properties present in your persisted state
    };
    products: {
      // Define the structure of the products slice here
      Products: Product[];
      // Add any other properties present in your products slice
    };
    cart: {
      // Define the structure of the cart slice here
      // Assuming cartItems is the key storing cart items
      cartItems: cartItems[];
      // Add any other properties present in your cart slice
    };
    // Add other slices if present
  }