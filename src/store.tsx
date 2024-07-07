// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/reducer/app.reducer';
import ThemeReducer from './redux/reducer/theme.reducer';
import personReducer from './redux/slice/person-slice';


const store = configureStore({
  reducer: {
    // user: userReducer,
    theme: ThemeReducer,
    persons: personReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// export type RootState = ReturnType<typeof store.getState>;