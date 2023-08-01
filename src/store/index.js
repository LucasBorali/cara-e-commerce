import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import  displaySlice from './display-slice'

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer, display: displaySlice.reducer},
});

export default store;
