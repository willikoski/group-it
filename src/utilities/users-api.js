import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  console.log('Sending login request with credentials:', credentials);
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function resetPassword(emailData) {
  console.log('Sending password reset request for email:', emailData);
  return sendRequest(`${BASE_URL}/reset-password`, 'POST', emailData);
}

export async function findUser(userId) {
  console.log('Fetching user with ID:', userId);
  return sendRequest(`${BASE_URL}/${userId}`);
}

export async function index() {
  console.log('Fetching all users');
  return sendRequest(BASE_URL);
}
