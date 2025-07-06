import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; 

// GET PRODUCTS
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("http://localhost:5000/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
});

// CREATE PRODUCT
export const createProduct = createAsyncThunk("products/createProduct", async (productData) => {
  const res = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify(productData)
  });
  if (!res.ok) throw new Error("Failed to create product");
  toast.success("Product created successfully");
  return await res.json();
});

// DELETE PRODUCT
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error("Failed to delete product");
  toast.success("Product deleted");
  return id;
});

// EDIT PRODUCT
export const editProduct = createAsyncThunk("products/editProduct", async ({ id, updatedData }) => {
  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  if (!res.ok) throw new Error("Failed to edit product");
  toast.success("Product updated");
  return await res.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createProduct.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter((product) => product._id !== action.payload);
      })

      .addCase(editProduct.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.list.findIndex((p) => p._id === updated._id);
        if (index !== -1) {
          state.list[index] = updated;
        }
      });
  }
});

export default productsSlice.reducer;