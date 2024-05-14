import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Homepage from '../Homepage/Homepage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import BookForm from '../../components/BookForm/BookForm'; 

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<Homepage />} /> {/* render Homepage at the root */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/add-book" element={<BookForm />} /> {/* Add a route for BookForm */}
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
