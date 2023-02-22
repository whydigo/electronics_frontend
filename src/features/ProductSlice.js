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
    formData.append("model", data.model);
    formData.append("nutrition", data.nutrition);
    formData.append("batteryCapacity", data.batteryCapacity);
    formData.append("typeOfMatrix", data.typeOfMatrix);
    formData.append("permission", data.permission);

    try {
      const res = await fetch("http://localhost:4000/product", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      console.log(result, "result");
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
        console.log(action.payload, "ACTION FINAL");
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