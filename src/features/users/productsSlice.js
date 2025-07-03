import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("http://localhost:5000/api/products")
  if (!res.ok) throw new Error('failed to fetch products')
  return await res.json();

})

const productsSlice = createSlice({
  name: "Products",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true,
          state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false,
          state.list = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false,
          state.error = action.error.message
      })
  }
})

export default productsSlice.reducer