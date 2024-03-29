import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from '../thunk';

const initialState = {
  greeting: '',
  isLoading: true,
  error: false,
  errorMessage: '',
};

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    }).addCase(fetchGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload;
    });
  },
});

export default greetingsSlice.reducer;
