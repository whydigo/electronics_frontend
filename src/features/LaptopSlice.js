import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  laptop: [],
  error: null,
  loading: false,
};

export const fetchLaptop = createAsyncThunk(
  "laptop/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/laptops");
      const laptop = await res.json();
      if (laptop.error) {
        return thunkAPI.rejectWithValue(laptop.error);
      }
      return thunkAPI.fulfillWithValue(laptop);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const LaptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
	 .addCase(fetchLaptop.fulfilled, (state, action) => {
      state.laptop = action.payload;
		state.error=null;
      state.loading = false;
    })
	 .addCase(fetchLaptop.rejected, (state, action) => {
		state.error = action.payload;
		state.loading = false;
	 })
	 .addCase(fetchLaptop.pending , (state, action) =>{
		state.loading=true;
		state.error=null;
	 })
  },
});

export default LaptopSlice.reducer