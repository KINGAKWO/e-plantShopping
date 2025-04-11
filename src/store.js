import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: (state = [], action) => {
      switch (action.type) {
        case 'ADD_PRODUCT':
          return [...state, { ...action.payload }];
        default:
          return state;
      }
    },
  },
});
export default store;