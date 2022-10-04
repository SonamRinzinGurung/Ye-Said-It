import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuote = createAsyncThunk("getQuote", async (arg, thunkAPI) => {
  try {
    const { data } = await axios("https://api.kanye.rest/");
    return data.quote;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("error ocurred...");
  }
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: { quote: "", isLoading: false },
  reducers: {},
  extraReducers: {
    [getQuote.pending]: (state) => {
      state.isLoading = true;
    },
    [getQuote.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.quote = action.payload;
    },
    [getQuote.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
  },
});

export default quoteSlice.reducer;
