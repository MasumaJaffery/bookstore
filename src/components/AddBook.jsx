/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import BookList from './BookList';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

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

    dispatch(addBook(newBook)); // Dispatch the action to add a book
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
      <BookList />
    </>
  );
}

export default AddBook;
