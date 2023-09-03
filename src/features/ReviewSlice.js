import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  error: null,
  loading: false,
};

// Thunk для загрузки отзывов
export const fetchReviews = createAsyncThunk(
  "reviews/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/review");
      const reviews = await res.json();
      console.log(reviews, 'reviews');
      if (reviews.error) {
        return thunkAPI.rejectWithValue(reviews.error);
      }
      return thunkAPI.fulfillWithValue(reviews);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Thunk для создания отзыва
export const postReview = createAsyncThunk(
  "reviews/post",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/review", {
        method: "POST",
        body: JSON.stringify({ text: data.text, product: data.product }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const review = await res.json();

      if (review.error) {
        return thunkAPI.rejectWithValue(review.error);
      }
      return review;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Thunk для удаления отзыва
export const deleteReview = createAsyncThunk(
  "review/delete",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/review/${id}`, {
        method: "DELETE",
      });
      const deletedReview = await res.json();
      return deletedReview;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const ReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Загрузка отзывов
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
      // Создание отзыва
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
      // Удаление отзыва
      .addCase(deleteReview.fulfilled, (state, action) => {
        const deletedId = action.payload;
        state.reviews = state.reviews.filter(
          (review) => review._id !== deletedId
        );
        state.loading = false;
      })
      .addCase(deleteReview.pending, (state, action) => {
        state.loading = true;
        const idToDelete = action.meta.arg.id;
        state.reviews = state.reviews.map((review) => {
          if (review._id === idToDelete) {
            return {
              ...review,
              loading: true,
            };
          }
          return review;
        });
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ReviewsSlice.reducer;
