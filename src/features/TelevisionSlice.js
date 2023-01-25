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

export const postTelevision = createAsyncThunk(
  "tv/post",
  async (
    {
      name,
      description,
      price,
      discount,
      model,
      connection,
      screen,
      connector,

    },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:4000/television", {
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
          connection,
          screen,
          connector,
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
   .addCase(postTelevision.fulfilled, (state, action) => {
    state.television = state.television.push(action.payload);
    state.error = null;
    state.loading = false;
  })
  .addCase(postTelevision.rejected, (state, action) => {
    state.error = action.payload;
    state.loading = false;
  })
  .addCase(postTelevision.pending, (state, action) => {
    state.loading = true;
    state.error = null;
  });
  },
});

export default TelevisionaSlicer.reducer