import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], // Array to store fetched products
  loading: false, // Loading state
  error: null, // Error state
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.results;
    },
    fetchProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFail } = productSlice.actions;
export default productSlice.reducer;
