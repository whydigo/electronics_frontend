import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  error: null,
  loading: false,
};

export const fetchReviews = createAsyncThunk(
  "reviews/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/review");
      const reviews = await res.json();

      if (reviews.error) {
        return thunkAPI.rejectWithValue(reviews.error);
      }
      return thunkAPI.fulfillWithValue(reviews);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postReview = createAsyncThunk(
  "reviews/post",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/review", {
        method: "POST",
        body: JSON.stringify({ text: data.text, product: data.product }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const reviews = await res.json();
      return reviews;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const ReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.loading = false;
      })
      .addCase(postReview.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default ReviewsSlice.reducer;
