const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  type: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    SET_FILTER: (state, { type, payload }) => {
      return { ...state };
    },
  },
});

export default filterSlice.reducer;
export const { SET_FILTER } = filterSlice.actions;
