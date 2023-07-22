/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import BookList from './Booklist';
/* Book Already imported in Booklist so that's why i don't import it here! */

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [books, setBooks] = useState([]);

  const handleAddBook = (e) => {
    e.preventDefault();
    if (title.trim() === '' || category.trim() === '') {
      return;
    }
    const newBook = {
      id: Date.now(),
      title,
      category,
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    setTitle('');
    setCategory('');
  };

  return (
    <>
      <div>
        <form onSubmit={handleAddBook}>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <BookList
        books={books}
        // eslint-disable-next-line max-len
        onRemove={(bookId) => setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId))}
      />
    </>
  );
};

export default AddBook;
