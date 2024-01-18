import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

const apiUrl = 'http://127.0.0.1:3001/api/v1/greetings';

const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async (thunkAPI) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export default fetchGreeting;
