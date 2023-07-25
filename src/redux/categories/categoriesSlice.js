import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  intialState: { status: 'Under construction', categories: [] },
  reducer: {
  },
});

export default categorySlice.reducer;
