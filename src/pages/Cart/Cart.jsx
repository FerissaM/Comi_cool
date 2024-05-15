import React from 'react'; // Don't forget to import React if you're using JSX
import './Cart.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetails/OrderDetails';

export default function Cart() {
  return (
    <main className="Cart">
      <header className="header">
        <Logo />
        <UserLogOut />
      </header>
      <section className="order-details">
        <OrderDetail />
      </section>
    </main>
  );
}
