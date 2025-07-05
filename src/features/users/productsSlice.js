import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("http://localhost:5000/api/products")
  if (!res.ok) throw new Error('failed to fetch products')
  return await res.json();

})
export const createProduct = createAsyncThunk("product/createProduct", async (userData) => {
  const res = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: { 'Contect-Type': "application/json" },
    body: JSON.stringify(userData)
  })
  if (!res.ok) throw new Error('network response was not ok')
  toast.success('User added successfully')
  return await res.json()
})

export const deleteProdcut = createAsyncThunk("product/deleteProduct", async (id) => {
  const res = await fetch(`http://lacalhost:5000/api/products/${id}`, {
    method: "DELETE",
    headers: { 'Contect-Type': 'application/json' },

  })
  return id
})

export const editProduct = createAsyncThunk("product/editerProduct", async ({ id, updatedData }) => {
  const res = await fetch(`http://localhost:5000/api/users/${id}`, {
    method: 'PUT',
    headers: { "Content-Type": "applicaation/json" },
    body: JSON.stringify(updatedData),
  })
  return await res.json()
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
      .addCase(createProduct.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
      .addCase(deleteProdcut.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => { user._id !== action.payload })
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.list.findIndex((u) => u._id === updated._id);
        if (index !== -1) {
          state.list[index] = updated
        }
      });
  }
})

export default productsSlice.reducer