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

export const deleteReview = createAsyncThunk(
  "review/delete",
  async (id, thunkAPI) => {
    console.log(id, "id3");
    try {
      const res = fetch(`http://localhost:4000/review/${id}`, {
        method: "DELETE",
      });
      const review = await res.json();
      return review;
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
      //fetch
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.error = null;
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
      //post
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
      })
      //delete
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((review) => {
          if (review._id === action.payload) {
            return false;
          }
          state.loading = false;
          return true;
        });
      })
      .addCase(deleteReview.pending, (state, action) => {
        state.loading = true;
        state.reviews = state.reviews.filter((review) => {
          if (review._id === action.meta.arg.id) {
            review.loading = true;
          }
          return true;
        });
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ReviewsSlice.reducer;
