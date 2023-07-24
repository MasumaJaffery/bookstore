/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const bookslice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook(state, action) {
      const NewBook = action.payload;
      state.push(NewBook);
    },
    removeBook(state, action) {
      const bookRemove = action.payload;
      return state.filter((book) => book.id !== bookRemove);
    },
  },
});

export default bookslice.reducer;
