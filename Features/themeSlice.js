const { createSlice } = require('@reduxjs/toolkit');

const initialState =
  typeof window !== 'undefined'
    ? localStorage.getItem('theme') || 'light'
    : 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    CHANGE_THEME: (state, { type, payload }) => {
      localStorage.setItem('theme', payload);
      return payload;
    },
  },
});

export default themeSlice.reducer;
export const { CHANGE_THEME } = themeSlice.actions;
