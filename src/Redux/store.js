import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/AuthSlice'
import cartReducer from './features/CartSlice'
import wishReducer from './features/WishlistSlice'
import searchReducer from './features/SearchSlice'
import productsReducer from './features/ProductSlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    cart:cartReducer,
    wishlist:wishReducer,
    search:searchReducer,
    products:productsReducer,
  },
})