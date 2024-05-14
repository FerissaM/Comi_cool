import React, { useState, useEffect } from 'react';
import * as booksApi from '../../utilities/books-api';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
      const response = await booksApi.getAll();
      setBooks(response)
  }

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;