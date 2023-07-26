/* eslint-disable linebreak-style */
// BookList.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  // Check if books is undefined or empty before rendering
  if (!books || books.length === 0) {
    return <h5>No books available.</h5>;
  }

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId)); // Dispatch the removeBook action with the bookId as payload
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

export default BookList;
