import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  camera: [],
  error: null,
  loading: false,
};

export const fetchCamera = createAsyncThunk(
  "camera/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/camera");
      const camera = await res.json();
      if (camera.error) {
        return thunkAPI.rejectWithValue(camera.error);
      }
      return thunkAPI.fulfillWithValue(camera);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const CameraSlicer = createSlice({
  name: "camera",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
	 .addCase(fetchCamera.fulfilled, (state, action) => {
      state.camera = action.payload;
		state.error=null;
      state.loading = false;
    })
	 .addCase(fetchCamera.rejected, (state, action) => {
		state.error = action.payload;
		state.loading = false;
	 })
	 .addCase(fetchCamera.pending , (state, action) =>{
		state.loading=true;
		state.error=null;
	 })
  },
});

export default CameraSlicer.reducer