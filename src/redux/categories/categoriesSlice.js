import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const selectCategories = (state) => state.categories.categories;
export const selectStatus = (state) => state.categories.status;

export default categoriesSlice.reducer;
