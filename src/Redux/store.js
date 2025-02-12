import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/AuthSlice';
import cartReducer from './features/CartSlice';
import wishlistReducer from './features/WishlistSlice';
import productReducer from './features/ProductSlice';
import searchReducer from './features/SearchSlice';
import userReducer from './features/UserSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productReducer,
    search: searchReducer,
    users: userReducer,
  },
});