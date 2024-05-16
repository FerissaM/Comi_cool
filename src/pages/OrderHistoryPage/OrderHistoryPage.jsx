import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList'; 
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import { getOrders } from '../../utilities/orders-api'; 

function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders();
        setOrders(ordersData);
        setActiveOrder(ordersData.length ? ordersData[0] : null);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    
    fetchOrders();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/cart" className="button btn-sm">Back to your cart</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList orders={orders} setActiveOrder={setActiveOrder} />
      <OrderDetails order={activeOrder} />
    </main>
  );
}

export default OrderHistoryPage;