/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Booklist from './Booklist';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  const handleAddBook = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === '') {
      return;
    }
    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    setTitle('');
    setAuthor('');
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
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <Booklist
        books={books}
        // eslint-disable-next-line max-len
        onRemove={(bookId) => setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId))}
      />
    </>
  );
};

export default AddBook;
