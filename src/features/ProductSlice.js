import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  error: null,
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  "product/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/product");
      const product = await res.json();
      if (product.error) {
        return thunkAPI.rejectWithValue(product.error);
      }
      return thunkAPI.fulfillWithValue(product);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postProduct = createAsyncThunk(
  "product/post",
  async (data, thunkAPI) => {
    const formData = new FormData();
    formData.append("img", data.img);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append("info0", data.info0);
    formData.append("info1", data.info1);
    formData.append("info2", data.info2);
    formData.append("info3", data.info3);
    formData.append("info4", data.info4);
    formData.append("info5", data.info5);
    formData.append("info6", data.info6);
    formData.append("info7", data.info7);
    formData.append("info8", data.info8);
    formData.append("info9", data.info9);
    formData.append("info10", data.info10);
    formData.append("info11", data.info11);
    formData.append("info12", data.info12);
    formData.append("info13", data.info13);
    formData.append("info14", data.info14);
    formData.append("info15", data.info15);
    formData.append("category", data.category);

    try {
      const res = await fetch("http://localhost:4000/product", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      return thunkAPI.fulfillWithValue(result);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const ProductSlicer = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.product = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default ProductSlicer.reducer;