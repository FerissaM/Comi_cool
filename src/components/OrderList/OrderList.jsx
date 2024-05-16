import React from 'react';
import './OrderList.css';

function OrderList({ orders, setActiveOrder }) {
  return (
    <div className="OrderList">
      {orders.length ? (
        orders.map(order => (
          <div key={order.id} onClick={() => setActiveOrder(order)}>
            Order #{order.id}
          </div>
        ))
      ) : (
        <div>No orders found</div>
      )}
    </div>
  );
}

export default OrderList;