/* eslint-disable linebreak-style */
// BookList.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  // Check if books is undefined or empty before rendering
  if (!books || books.length === 0) {
    return <h5>No books available.</h5>;
  }

  const handleRemoveBook = (bookId) => {
    dispatch({ type: 'REMOVE_BOOK', payload: bookId });
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <span>{book.title}</span>
          <span>{book.category}</span>
          <button type="button" onClick={() => handleRemoveBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

// No need to define propTypes and defaultProps here, as they are already provided above.

export default BookList;
