import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart } from './CartSlice';

const initialState = {
  wishlist: []
};

export const addToCartWithWishlist = createAsyncThunk(
  'wishlist/addToCartWithWishlist',
  async (product, { dispatch }) => {
    dispatch(addToCart(product));
    return product;
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = state.wishlist.find((product) => product.id === action.payload.id);
      if (!product) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((product) => product.id !== action.payload.id);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addToCartWithWishlist.fulfilled, (state, action) => {
      state.wishlist = state.wishlist.filter((product) => product.id !== action.payload.id);
    });
  }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;