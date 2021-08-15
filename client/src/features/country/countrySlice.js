import { createSlice } from '@reduxjs/toolkit';
import { attemptFetchCountryList } from './countryActions';

const initialState = {
  loading: false,
  countries: [],
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(attemptFetchCountryList.pending, state => {
        state.loading = true;
      })
      .addCase(attemptFetchCountryList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.countries = payload;
      })
      .addCase(attemptFetchCountryList.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export const countryReducer = countrySlice.reducer;
