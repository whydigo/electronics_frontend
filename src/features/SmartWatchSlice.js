import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
smartWatch: [],
  error: null,
  loading: false,
};

export const fetchSmartWatch = createAsyncThunk(
  "smartWatch/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/smartwatch");
      const smartwatch = await res.json();
      if (smartwatch.error) {
        return thunkAPI.rejectWithValue(smartwatch.error);
      }
      return thunkAPI.fulfillWithValue(smartwatch);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const SmartWatchSlice = createSlice({
  name: "smartwatch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
	 .addCase(fetchSmartWatch.fulfilled, (state, action) => {
      state.smartWatch = action.payload;
		state.error=null;
      state.loading = false;
    })
	 .addCase(fetchSmartWatch.rejected, (state, action) => {
		state.error = action.payload;
		state.loading = false;
	 })
	 .addCase(fetchSmartWatch.pending , (state, action) =>{
		state.loading=true;
		state.error=null;
	 })
  },
});

export default SmartWatchSlice.reducer