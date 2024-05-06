import {FLUSH, PAUSE, PERSIST, PURGE,REGISTER,REHYDRATE, persistStore,} from "redux-persist";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ProductSlice, { Product } from '../reducer/ProductSlice';
import { cartItems, cartSlice } from '../reducer/CartSlice';



interface PersistedState  {
  _persist: {
    version: number;
    rehydrated: boolean;
  };
  products: {
    Products: Array<Product>;
  };
  cart: {
    cartItems: Array<cartItems>;
  };
}



const presistConfig = {
  key:"root",
  storage,
  version: 1,
}

const rootReducer = combineReducers({
  products:ProductSlice,
  cart:cartSlice
});


const persistedReducer = persistReducer(presistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export type RootState = PersistedState;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType< typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
