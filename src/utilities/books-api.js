import sendRequest from "./send-request";
const BASE_URL = '/api/books';

export async function getAll () {
  return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function addItemToCart(bookId) {
    return sendRequest(`/api/orders/cart/items/${bookId}`, 'POST');
}

// export function getAll(filters = {}) {
//     const query = new URLSearchParams(filters).toString();
//     return sendRequest(`${BASE_URL}?${query}`);
// }