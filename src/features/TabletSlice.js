import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tablet: [],
  error: null,
  loading: false,
};

export const fetchTablet = createAsyncThunk(
  "table/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/tablets");
      const tablet = await res.json();
      if (tablet.error) {
        return thunkAPI.rejectWithValue(tablet.error);
      }
      return thunkAPI.fulfillWithValue(tablet);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const TabletSlice = createSlice({
  name: "tablet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
	 .addCase(fetchTablet.fulfilled, (state, action) => {
      state.tablet = action.payload;
		state.error=null;
      state.loading = false;
    })
	 .addCase(fetchTablet.rejected, (state, action) => {
		state.error = action.payload;
		state.loading = false;
	 })
	 .addCase(fetchTablet.pending , (state, action) =>{
		state.loading=true;
		state.error=null;
	 })
  },
});

export default TabletSlice.reducer