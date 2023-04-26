import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  details: {},
  isPending: false,
  error: '',
};

export const fetchData = createAsyncThunk(
  'home/fetchData',
  async () => {
    try {
      const response = await axios('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=d40f5d304d6500b95c49511cbe314b41');
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    showDetails: (state, action) => {
      const details = state.data.filter((item) => item.ticker === action.payload);
      // disable eslint for this line
      state.details = details[0];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isPending = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isPending = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isPending = false;
        state.error = 'Unable to fetch data, please check your connection and try again later.';
      });
  },
});

export default homeSlice.reducer;
