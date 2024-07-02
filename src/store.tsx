// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/reducer/app.reducer';
import ThemeReducer from './redux/reducer/theme.reducer';


const store = configureStore({
  reducer: {
    user: userReducer,
    theme: ThemeReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;