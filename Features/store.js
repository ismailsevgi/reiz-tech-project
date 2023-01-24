const { configureStore } = require('@reduxjs/toolkit');
import themeReducer from './themeSlice';
import countriesReducer from './countriesSlice';
const store = configureStore({
  reducer: {
    countries: countriesReducer,
    theme: themeReducer,
  },
});

export default store;
