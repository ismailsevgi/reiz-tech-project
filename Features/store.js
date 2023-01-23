const { configureStore } = require('@reduxjs/toolkit');
import filterReducer from './filterSlice';
const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
