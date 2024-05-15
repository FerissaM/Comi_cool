import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as booksApi from '../../utilities/books-api';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
      const response = await booksApi.getAll();
      setBooks(response);
  }

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
          <Link to={`/books/${book._id}`}>
          {book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;