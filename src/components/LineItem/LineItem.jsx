import React from 'react';

export default function LineItem({ lineItem }) {
  const { item, qty } = lineItem;

  return (
    <div className="line-item">
      <div>{item.name}</div>
      <div>{qty}</div>
      <div>${(item.price * qty).toFixed(2)}</div>
    </div>
  );
}
