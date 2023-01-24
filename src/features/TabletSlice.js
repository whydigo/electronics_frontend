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

export const postTablet = createAsyncThunk(
  "tablet/post",
  async (
    {
      name,
      description,
      price,
      discount,
      model,
      cpu,
      numberOfProcessorCores,
      numberOfSimCards,
      screenResolution,
      ram,
      builtInMemory,
      batteryCapacity,
      mainCamera,
      warrantyPeriod,
    },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:4000/tablets", {
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
          cpu,
          numberOfProcessorCores,
          numberOfSimCards,
          screenResolution,
          ram,
          builtInMemory,
          batteryCapacity,
          mainCamera,
          warrantyPeriod,
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

const TabletSlice = createSlice({
  name: "tablet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTablet.fulfilled, (state, action) => {
        state.tablet = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchTablet.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchTablet.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postTablet.fulfilled, (state, action) => {
        state.tablet = state.tablet.push(action.payload);
        state.error = null;
        state.loading = false;
      })
      .addCase(postTablet.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postTablet.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default TabletSlice.reducer;
