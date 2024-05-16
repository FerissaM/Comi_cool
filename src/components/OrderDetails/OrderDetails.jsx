import React from 'react';
import LineItem from '../LineItem/LineItem';

function OrderDetails({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;
  console.log(order)
  const lineItems = order.lineItems.map(item => (
    <LineItem
      key={item._id}
      lineItem={item}
      handleChangeQty={handleChangeQty}
      isPaid={order.isPaid}
    />
  ));

  return (
    <div className="OrderDetails">
      <div className="section-heading">
        {order.isPaid ? (
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
        ) : (
          <span>NEW ORDER</span>
        )}
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ? (
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ? (
                <span className="right">Total: &nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECKOUT
                </button>
              )}
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div className="more">want more books?</div>
        )}
      </div>
    </div>
  );
}

export default OrderDetails;