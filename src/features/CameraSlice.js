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

export const postCamera = createAsyncThunk(
  "camera/post",
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
      const res = await fetch("http://localhost:4000/camera", {
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

const CameraSlicer = createSlice({
  name: "camera",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamera.fulfilled, (state, action) => {
        console.log(action.payload, "ACTION FINAL");
        state.camera = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchCamera.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamera.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default CameraSlicer.reducer;