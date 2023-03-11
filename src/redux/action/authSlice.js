import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { supabase } from "../../config/initSupabase";
const initialState = {
  isSignedIn: false,
  user: null,
  isLoading: false,
  error: null,
};
export const authSignIn = createAsyncThunk(
  "user/authSignIn",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const { data: user } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const authListener = createAsyncThunk(
  "user/authListener",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data: authListener } = supabase.auth.onAuthStateChange(
        (_event) => {
          switch (_event) {
            case "SIGNED_OUT":
              console.log("signout ka boy");
              dispatch(setSignOut());
              break;
            default:
          }
        }
      );
      return authListener;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    setSignOut: (state) => {
      state.user = null;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authSignIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(authSignIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authSignIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setSignIn, setSignOut, setLoading } = authSlice.actions;

export default authSlice.reducer;