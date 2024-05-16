import React from 'react';

function LineItem({ lineItem, handleChangeQty }) {
  const { item, qty } = lineItem;

  return (
    <div className="line-item">
      <div>{item.title}</div>
      <div>
        <button onClick={() => handleChangeQty(item._id, qty - 1)}>-</button>
        {qty}
        <button onClick={() => handleChangeQty(item._id, qty + 1)}>+</button>
      </div>
      <div>${(item.price * qty).toFixed(2)}</div>
    </div>
  );
}

export default LineItem;