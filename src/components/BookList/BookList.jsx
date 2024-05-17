import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as booksApi from '../../utilities/books-api';
import './BookList.css';

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
    <div className="container">
      {/* <h1>Book List</h1> */}
      <ul className="book-list">
        {books.map(book => (
          <li key={book._id} className="book-item">
          <Link to={`/books/${book._id}`}>
          {book.imageUrl && <img src={book.imageUrl} alt={book.title} className="book-image" />}
          <div className="book-title">{book.title}</div>
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;