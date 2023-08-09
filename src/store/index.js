import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import displaySlice from './display-slice';
import userSlice from './user-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    display: displaySlice.reducer,
    user: userSlice.reducer,
  },
});
export default store;
