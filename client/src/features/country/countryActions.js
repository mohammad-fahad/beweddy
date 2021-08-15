import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const attemptFetchCountryList = createAsyncThunk(
  'country/attemptFetchCountryList',
  async () => {
    try {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);
