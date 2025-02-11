import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ id: Date.now(), ...action.payload });
    },
    deleteProduct: (state, action) => {
      return state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    }
  }
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
