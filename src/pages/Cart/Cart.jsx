import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import { getCart, checkout, setItemQty } from '../../utilities/orders-api';

function Cart() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartData = await getCart();
        setOrder(cartData);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
  
    fetchCart();
  }, []);

  async function handleChangeQty (itemId, newQty) {
    console.log(newQty)
    const updatedCart = await setItemQty(itemId, newQty);
    setOrder(updatedCart);
  };

  async function handleCheckout() {
    try {
      await checkout(); // calls the checkout function from orders-api
      navigate('/orders'); // redirect to order history page
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  }

  return (
    <main className="cart-container">
      <h1 className="cart-header">Your Cart</h1>
      <section className="order-details">
        <OrderDetails 
          order={order}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
      </section>
      <button className="cart-button" onClick={handleCheckout}>Proceed to Checkout</button>
    </main>
  );
}

export default Cart;