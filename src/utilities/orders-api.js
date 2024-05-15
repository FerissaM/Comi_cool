import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve the current cart for the user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
}