import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve the current cart for the user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItem(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}

export function getOrders() {
    return sendRequest(`${BASE_URL}`);
}

export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function setItemQty(itemId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', {itemId, newQty});
}