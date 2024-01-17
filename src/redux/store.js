import { configureStore } from '@reduxjs/toolkit';
import greettingsSlice from './reducers/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greettingsSlice,
  },
});

export default store;
