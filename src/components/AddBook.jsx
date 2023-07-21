/* eslint-disable linebreak-style */
import React, { useState } from 'react';

const AddBook = () => {
  const [book, setBook] = useState('');
  const [category, setCategory] = useState('');
  const [booklist, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      book,
    };
    if (book) {
      setList([...booklist, newItem]);
      setBook('');
    }
  };

  const handleDelete = (id) => {
    setList(booklist.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book Name"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>

      {/* Display Books */}
      <div>
        {booklist.map((item) => (
          <div key={item.id}>
            <h4>{item.book}</h4>
            <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddBook;
