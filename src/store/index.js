import { configureStore } from '@reduxjs/toolkit';


import cartSlice from './cart-slice';
import displaySlice from './display-slice';


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    display: displaySlice.reducer,
  },
});
export default store;
