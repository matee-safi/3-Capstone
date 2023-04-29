import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  detailsId: 0,
  isPending: false,
  error: '',
  search: '',
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
    getId: (state, action) => {
      state.detailsId = action.payload;
    },
    setSearch: (state, action) => ({ ...state, search: action.payload }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isPending = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isPending = false;
        state.data = action.payload;
        state.data.forEach((item) => {
          item.id = state.data.indexOf(item);
          item.isVisible = true;
        });
      })
      .addCase(fetchData.rejected, (state) => {
        state.isPending = false;
        state.error = 'Unable to fetch data';
      });
  },
});

export const { getId, setSearch } = homeSlice.actions;
export default homeSlice.reducer;
