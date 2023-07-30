import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          img: newItem.img,
          brand: newItem.brand,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      state.items = state.items.filter(
        item => item.name !== action.payload.name
      );
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
