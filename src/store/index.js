import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products-slice';
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
