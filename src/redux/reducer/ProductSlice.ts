import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'

export const fetchStoreAsyncThunk = createAsyncThunk("fetch/storeItem", async() => {
    try {
            const response = await axios.get(`https://fakestoreapi.com/products`)
            // console.log(response.data);
            return response.data;
    } catch (error:unknown) {
        return error
    }
})

export interface Product {
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
export interface ProductState {
    Products: Array<Product>,
    loading:boolean,
    error:string|undefined
}

// Define the initial state using that type
const initialState: ProductState = {
  Products : [],
  loading:false,
  error:undefined
}

export const counterSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProducts: (state, action:PayloadAction<Product[]>) => {
          state.Products = action.payload
    }
  },
  extraReducers:(builder)=>{
        builder.addCase(fetchStoreAsyncThunk.fulfilled,(state, action)=>{
           state.loading = false,
           state.Products= action.payload
        }).addCase(fetchStoreAsyncThunk.pending,(state)=>{
              state.loading = true
        }).addCase(fetchStoreAsyncThunk.rejected,(state, action)=>{
              state.loading = false,
              state.error = action.error.message
        })
  }
})

export const { addProducts } = counterSlice.actions
export const selectCount = (state: RootState) => state

export default counterSlice.reducer