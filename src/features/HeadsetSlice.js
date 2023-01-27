import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  headset: [],
  error: null,
  loading: false,
};

export const fetchHeadset = createAsyncThunk(
  "headset/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/headset");
      const headset = await res.json();
      if (headset.error) {
        return thunkAPI.rejectWithValue(headset.error);
      }
      return thunkAPI.fulfillWithValue(headset);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postHeadset = createAsyncThunk(
  "headset/post",
  async (
    {
      name,
      description,
      price,
      discount,
      model,
      compatibility,
      connectType,
      connector,
      nutrition,
    },
    thunkAPI
  ) => {
   
    try {
      const res = await fetch("http://localhost:4000/headset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          discount: discount,
          model: model,
          compatibility,
          connectType,
          connector,
          nutrition,
        }),
      });
      const data = await res.json();

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const HeadsetSlicer = createSlice({
  name: "headset",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeadset.fulfilled, (state, action) => {
        state.headset = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchHeadset.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchHeadset.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postHeadset.fulfilled, (state, action) => {
        state.headset = state.headset.push(action.payload);
        state.error = null;
        state.loading = false;
      })
      .addCase(postHeadset.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postHeadset.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default HeadsetSlicer.reducer;
