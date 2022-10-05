import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuote = createAsyncThunk("getQuote", async (arg, thunkAPI) => {
  try {
    const { data } = await axios(
      "http://localhost:3000/api/v1/ye-said/getQuote"
    );

    return data.quote;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("error ocurred...");
  }
});

export const checkQuote = createAsyncThunk(
  "checkQuote",
  async ({ quote, choice }, thunkAPI) => {
    try {
      const { data } = await axios(
        `http://localhost:3000/api/v1/ye-said/checkQuote/${quote}`
      );
      const result = { answer: data.result, choice };
      return result;
    } catch (error) {}
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: { quote: "", isCorrect: false, score: 0, isLoading: false },
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
    [checkQuote.pending]: (state) => {
      state.isLoading = true;
    },
    [checkQuote.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload.answer === payload.choice) {
        state.score = state.score + 1;
      } else if (payload.answer !== payload.choice && state.score >= 1) {
        state.score = state.score - 1;
      } else {
        console.log("no points to spare");
      }
    },

    [checkQuote.rejected]: (state) => {},
  },
});

// export const { incorrect, correctQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
