import React from 'react';

function LineItem({ lineItem }) {
  const { item, qty } = lineItem;

  return (
    <div className="line-item">
      <div>{item.title}</div>
      <div>{qty}</div>
      <div>${(item.price * qty).toFixed(2)}</div>
    </div>
  );
}

export default LineItem;