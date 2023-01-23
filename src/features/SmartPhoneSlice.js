import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  smartPhone: [],
  error: null,
  loading: false,
};

export const fetchSmartPhone = createAsyncThunk(
  "smartPhone/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/smartphones");
      const smartPhone = await res.json();
      if (smartPhone.error) {
        return thunkAPI.rejectWithValue(smartPhone.error);
      }
		console.log(smartPhone, "act");
      return thunkAPI.fulfillWithValue(smartPhone);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const SmartPhoneSlicer = createSlice({
  name: "smartPhone",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSmartPhone.fulfilled, (state, action) => {
        state.smartPhone = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchSmartPhone.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchSmartPhone.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default SmartPhoneSlicer.reducer;
