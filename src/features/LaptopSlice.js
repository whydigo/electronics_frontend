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

export const postLaptop = createAsyncThunk(
  "laptop/post",
  async (
    {
      name,
      description,
      price,
      discount,
      model,
      processorClockSpeed,
      numberOfProcessorCores,
      processor,
      screenResolution,
      updateFrequency,
      warrantyPeriod,
      videoAdapterMemorySize,
      videoAdapter,
      batteryCapacity,
      ram,
      driveType,
      ssdStorageCapacity,
      housingMaterial,
    },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:4000/laptops", {
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
          processorClockSpeed,
          numberOfProcessorCores,
          processor,
          screenResolution,
          updateFrequency,
          warrantyPeriod,
          videoAdapterMemorySize,
          videoAdapter,
          batteryCapacity,
          ram,
          driveType,
          ssdStorageCapacity,
          housingMaterial,
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

const LaptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaptop.fulfilled, (state, action) => {
        state.laptop = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchLaptop.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchLaptop.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postLaptop.fulfilled, (state, action) => {
        state.laptop = state.laptop.push(action.payload);
        state.error = null;
        state.loading = false;
      })
      .addCase(postLaptop.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postLaptop.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default LaptopSlice.reducer;
