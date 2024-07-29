import * as usersAPI from './users-api';
const BASE_URL = '/api/users';

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return null;
    }
    return token;
  } catch (error) {
    console.error('Error parsing token:', error);
    localStorage.removeItem('token');
    return null;
  }
}

export function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return { _id: payload.userId }; // Adjust based on your token payload structure
  } catch (error) {
    console.error("Error parsing token:", error);
    return null; // Return null if there's an error parsing the token
  }
}

export async function getProfileUser(userId) {
  try {
    const foundUser = await usersAPI.findUser(userId)
    return foundUser
  } catch (error) {
    console.error("Error finding users", error)
  }
}

export async function indexUsers() {
  console.log('indexing users')
  try {
    const foundUsers = await usersAPI.index()
    return foundUsers
  } catch (error) {
    console.error("Error finding users", error)
  }
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function signUp(userData) {
  console.log('Signing up user with data:', userData);
  const token = await usersAPI.signUp(userData);
  
  // Store the token in localStorage
  localStorage.setItem('token', token);

  // Decode the token to get user details
  return getUser(); // Ensure getUser() extracts user details from the token payload
}

export async function login(credentials, rememberMe) {
  try {
    console.log('Logging in with credentials:', credentials);
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...credentials, rememberMe }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const { user, token } = await response.json();
    localStorage.setItem('token', token);

    ///// if you want to add a sessionStorage instead of the JWT tokens in the controller page ////
    // if (rememberMe) {
    //   localStorage.setItem('token', token);
    // } else {
    //   sessionStorage.setItem('token', token);
    // }

    return user;
  } catch (error) {
    console.error('Login Error:', error);
    throw new Error('Login failed');
  }
}

export async function resetPassword(emailData) {
  try {
    console.log('Resetting password for email:', emailData);
    await usersAPI.resetPassword(emailData);
    return true;
  } catch (error) {
    console.error('Password Reset Error:', error);
    throw new Error('Failed to reset password.');
  }
}

export async function updatePasswordWithToken(token, passwordData) {
  try {
    console.log('Updating password with token:', token, 'and data:', passwordData);
    const response = await fetch(`${BASE_URL}/reset-password/${token}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(passwordData),
    });

    if (!response.ok) {
      throw new Error('Failed to update password');
    }

    return true;
  } catch (error) {
    console.error('Password Update Error:', error);
    throw new Error('Failed to update password.');
  }
}