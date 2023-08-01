import { createSlice } from '@reduxjs/toolkit';

const displaySlice = createSlice({
  name: 'display',
  initialState: {
    product: null,
  },
  reducers: {
    productWindow(state, action) {
      state.product = action.payload;
    },
    clearDisplay(state) {
      state.product = null;
      console.log(state.product);
    },
  },
});

export const displayActions = displaySlice.actions;


export default displaySlice;
