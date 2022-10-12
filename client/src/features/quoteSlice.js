import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuote = createAsyncThunk("getQuote", async (arg, thunkAPI) => {
  try {
    const { data } = await axios(
      "http://localhost:3000/api/v1/ye-said/getQuotes"
    );

    return await data;
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
      setTimeout(() => thunkAPI.dispatch(clearMessage()), 1000);
      return result;
    } catch (error) {}
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quotes: [],
    isCorrect: null,
    score: 0,
    isLoading: false,
    currentIndex: 0,
    gameOver: false,
  },
  reducers: {
    clearMessage: (state) => {
      state.isCorrect = null;
    },
    newGame: (state) => {
      state.isCorrect = null;
      state.score = 0;
      state.isLoading = false;
      state.currentIndex = 0;
    },
  },
  extraReducers: {
    [getQuote.pending]: (state) => {
      state.isLoading = true;
    },
    [getQuote.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.quotes = action.payload;
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
        state.isCorrect = true;
      } else if (payload.answer !== payload.choice && state.score >= 1) {
        state.score = state.score - 1;
        state.isCorrect = false;
      } else {
        state.isCorrect = false;
      }
      state.currentIndex = state.currentIndex + 1;
    },

    [checkQuote.rejected]: (state) => {},
  },
});

export const { clearMessage, newGame } = quoteSlice.actions;
export default quoteSlice.reducer;
