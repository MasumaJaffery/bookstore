/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, onRemove }) {
  return (
    <div>
      <span>{book.title}</span>
      <span>{book.category}</span>
      <button type="button" onClick={() => onRemove(book.id)}>Delete</button>
    </div>
  );
}

// Add prop type validation
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
