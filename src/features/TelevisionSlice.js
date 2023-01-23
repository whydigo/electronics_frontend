import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  television: [],
  error: null,
  loading: false,
};

export const fetchTelevision = createAsyncThunk(
  "television/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/television");
      const television = await res.json();
      if (television.error) {
        return thunkAPI.rejectWithValue(television.error);
      }
      return thunkAPI.fulfillWithValue(television);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const TelevisionaSlicer = createSlice({
  name: "television",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
	 .addCase(fetchTelevision.fulfilled, (state, action) => {
      state.television = action.payload;
		state.error=null;
      state.loading = false;
    })
	 .addCase(fetchTelevision.rejected, (state, action) => {
		state.error = action.payload;
		state.loading = false;
	 })
	 .addCase(fetchTelevision.pending , (state, action) =>{
		state.loading=true;
		state.error=null;
	 })
  },
});

export default TelevisionaSlicer.reducer