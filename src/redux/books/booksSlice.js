import { createSlice } from '@reduxjs/toolkit';

const bookslice = createSlice({
  name: 'book',
  initialState:
  [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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

export const { addBook, removeBook } = bookslice.actions;
export default bookslice.reducer;
