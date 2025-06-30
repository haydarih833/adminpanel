import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
    editProduct: (state, action) => {
      const i = state.list.findIndex(p => p.id === action.payload.id);
      if (i !== -1) state.list[i] = action.payload;
    },
    deleteProduct: (state, action) => {
      state.list = state.list.filter(p => p.id !== action.payload);
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
