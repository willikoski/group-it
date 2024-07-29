import { getToken } from './api-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  
  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  
  try {
    const res = await fetch(url, options);
    console.log(`Request to ${url} with method ${method} returned status: ${res.status}`);
    
    if (res.ok) {
      const data = await res.text(); // Change this to .text() if the response is plain text
      console.log('Response data:', data);
      return data; // Return the raw response if it's a token
    } else {
      const errorData = await res.json();
      console.error('Error response data:', errorData);
      throw new Error(errorData.message || 'Bad Request');
    }
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}