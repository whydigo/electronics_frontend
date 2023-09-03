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
      console.log(product, 'product');
      if (product.error) {
        return thunkAPI.rejectWithValue(product.error);
      }
      return thunkAPI.fulfillWithValue(product);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/product/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
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
    formData.append("info_0", data.info0);
    // formData.append("info_0", data.info0.title, data.info0.characteristic)
    // formData.append("info0", {title: data.info0.title, characteristic:  data.info0.characteristic })
    formData.append("info_1", data.info1);
    formData.append("info_2", data.info2);
    formData.append("info_3", data.info3);
    formData.append("info_4", data.info4);
    formData.append("info_5", data.info5);
    formData.append("info_6", data.info6);
    formData.append("info_7", data.info7);
    formData.append("info_8", data.info8);
    formData.append("info_9", data.info9);
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
      })
      /// УДАЛЕНИЕ
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.product = state.product.filter((product) => {
          if (product._id === action.payload._id) {
            return false;
          }
          state.loading = false;
          return true;
        });
      })
      .addCase(deleteProduct.pending, (state, action) => {
        state.loading = true;
        state.product = state.product.filter((product) => {
          if (product._id === action.meta.arg.id) {
            product.loading = true;
          }
          return true;
        });
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      // .addCase(deleteProduct.fulfilled, (state, action) => {
      //   state.product = action.payload;
      //   state.error = null;
      //   state.loading = false;
      // })
      // .addCase(deleteProduct.rejected, (state, action) => {
      //   state.error = action.payload;
      //   state.loading = false;
      // })
      // .addCase(deleteProduct.pending, (state, action) => {
      //   state.loading = true;
      //   state.error = null;
      // })
  },
});

export default ProductSlicer.reducer;
