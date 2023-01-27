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
  async (
    {
      name,
      description,
      price,
      discount,
      model,
      nutrition,
      batteryCapacity,
      typeOfMatrix,
      permission,
    },
    thunkAPI
  ) => {
    
    try {
      const res = await fetch("http://localhost:4000/camera", {
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
          nutrition: nutrition,
          batteryCapacity: batteryCapacity,
          typeOfMatrix: typeOfMatrix,
          permission: permission,
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

const CameraSlicer = createSlice({
  name: "camera",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamera.fulfilled, (state, action) => {
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
      })
      .addCase(postCamera.fulfilled, (state, action) => {
        state.camera = state.camera.push(action.payload);
        state.error = null;
        state.loading = false;
      })
      .addCase(postCamera.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postCamera.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default CameraSlicer.reducer;
