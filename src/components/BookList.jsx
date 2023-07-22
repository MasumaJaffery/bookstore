/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

function BookList({ books, onRemove }) {
  // Check if books is undefined or empty before rendering
  if (!books || books.length === 0) {
    return <h5>No books available.</h5>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <span>{book.title}</span>
          <span>{book.category}</span>
          <button type="button" onClick={() => onRemove(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

// Add prop type validation to Avoid Errors.
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
