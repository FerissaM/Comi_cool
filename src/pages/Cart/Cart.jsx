import React, { useState, useEffect } from 'react';
import './Cart.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import { getCart } from '../../utilities/orders-api';

function Cart() {
  const [order, setOrder] = useState(null);

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

  const handleChangeQty = (itemId, newQty) => {
    // to be edited if needed later
  };

  const handleCheckout = () => {
    // edit later
  };

  return (
    <main className="Cart">
      <section className="order-details">
        <OrderDetails 
          order={order}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
      </section> 
    </main>
  );
}

export default Cart;