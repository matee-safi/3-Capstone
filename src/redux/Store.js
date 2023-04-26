import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import detailsSlice from './details/detailsSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsSlice,
  },
});

export default store;
