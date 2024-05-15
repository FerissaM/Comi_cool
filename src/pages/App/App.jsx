import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Cart from '../Cart/Cart';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import BookList from '../../components/BookList/BookList'; 
import BookDetails from '../../components/BookDetails/BookDetails';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import LineItem from '../../components/LineItem/LineItem';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([]);

  function handleBuy(bookId) {
    const updatedCart = [...cart];
    updatedCart.push(bookId);
    setCart(updatedCart);
  }

  // eslint-disable-next-line
  return (
    <main className="App">
      { user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<BookList />} /> {/* render Homepage at the root */}
              <Route path="/books/:id" element={<BookDetails />} /> {/* render BookDetails for specific book */}
              <Route path="/orders/new" element={<Cart />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/order-details" element={<OrderDetails />} />
              <Route path="/line-item" element={<LineItem />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
