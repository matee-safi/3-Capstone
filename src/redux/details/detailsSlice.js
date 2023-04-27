// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// initialState = {
//   data: [],
//   details: {},
//   isPending: false,
//   error: '',
// };

// export const fetchDetails = createAsyncThunk(
//   'details/fetchDetails',
//   async () => {
//     try {
//       const response = await axios(
//         'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=d40f5d304d6500b95c49511cbe314b41',
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },
// );

// export const detailsSlice = createSlice({
//   name: 'details',
//   initialState,
//   reducers: {
//     showDetails: (state, action) => {
//       const details = state.data.filter(
//         (item) => item.ticker === action.payload,
//       );
//       state.details = details[0];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchDetails.pending, (state) => {
//         state.isPending = true;
//       })
//       .addCase(fetchDetails.fulfilled, (state, action) => {
//         state.isPending = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchDetails.rejected, (state) => {
//         state.isPending = false;
//         state.error = 'Unable to fetch data, please check your connection and try again later.';
//       });
//   },
// });

// export const { showDetails } = detailsSlice.actions;

// export default detailsSlice.reducer;
