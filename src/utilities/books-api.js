import sendRequest from "./send-request";
const BASE_URL = '/api/books';

export async function getAll () {
  return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function addBookToCart(bookId) {
    const response = await sendRequest(`${BASE_URL}/cart`, 'POST', { bookId });
    return response;
}
