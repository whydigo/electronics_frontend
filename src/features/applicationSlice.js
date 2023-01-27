import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  signUp: false,
  signIn: false,
  users:[],
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ login, password }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const json = await res.json();
      if (json.error) {
        thunkApi.rejectWithValue(json.error);
      }
      return json;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ login, password }, thunkApi) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkApi.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token.token);
      localStorage.setItem("id", token.id);


      return token;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchUser = createAsyncThunk("fetch/user", async (_, thunkAPI) => {
	try {
	  const res = await fetch("http://localhost:4000/users", {
		 headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${thunkAPI.getState().token.token}`,
		 },
	  });
	  const users = await res.json();
	  if (users.error) {
		 return thunkAPI.rejectWithValue(users.error);
	  }
	  return thunkAPI.fulfillWithValue(users);
	} catch (error) {
	  return thunkAPI.rejectWithValue(error.message);
	}
 });

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(authSignUp.pending, (state) => {
        state.error = null;
        state.signUp = true;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.error = action.payload;
        state.signUp = false;
      })
      .addCase(authSignUp.fulfilled, (state) => {
        state.error = null;
        state.signUp = false;
      })
      // Login
      .addCase(authSignIn.pending, (state) => {
        state.error = null;
        state.signIn = true;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.error = action.payload;
        state.signIn = false;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.error = null;
        state.signIn = false;
        state.token = action.payload.token
        state.id = action.payload.id

		  ;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        action.payload.map((item) => {
          if (item._id === localStorage.getItem("id")) {
            state.users = item;
          }
          return state.users;
        });
      })
  },
});

export default applicationSlice.reducer;
