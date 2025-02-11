import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/AuthSlice'
import cartReducer from './features/CartSlice'
import wishReducer from './features/WishlistSlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    cart:cartReducer,
    wishlist:wishReducer,
  },
})