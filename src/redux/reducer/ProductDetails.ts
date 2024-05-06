import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface Product {
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
  
  interface InitialState  {
    Products: Product[];
  }
// Define the initial state using that type

const initialState  : InitialState = {
    Products:[
      {
          "id": 1,
          "title": "",
          "price": 0,
          "description": "",
          "category": "",
          "image": "",
          "rating": {
          "rate": 0,
          "count": 0
          }
          },
    ]
  }

export const ProductDetailSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProducts: (state, action:PayloadAction<InitialState>) => {
          state.Products = action.payload.Products
    }
  }
})

export const { addProducts } = ProductDetailSlice.actions

export default ProductDetailSlice.reducer