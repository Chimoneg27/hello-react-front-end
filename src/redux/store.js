import { configureStore } from '@reduxjs/toolkit';
import greettingsReducer from './reducers/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greettingsReducer,
  },
});

export default store;
