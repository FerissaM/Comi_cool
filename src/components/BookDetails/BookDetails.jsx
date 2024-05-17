import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as booksApi from '../../utilities/books-api';

function BookDetails({ handleBuy }) {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    const fetchBookDetails = useCallback(async () => {
        try {
          const fetchedBook = await booksApi.getById(id);
          setBook(fetchedBook);
        } catch (error) {
          console.error('Error fetching book details:', error);
        }
    }, [id]);

    useEffect(() => {
      fetchBookDetails();
    }, [fetchBookDetails]);


    function handleBuyClick() {
        handleBuy(id);  // Call handleBuy with the book id
    }
    
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.imageUrl} style={{ width: '200px' }} alt={``}/>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
      <p><strong>Series:</strong> {book.series.name} (Volume {book.series.volume})</p>
      <button onClick={handleBuyClick}>Buy</button>
    </div>
  );
}

export default BookDetails;
