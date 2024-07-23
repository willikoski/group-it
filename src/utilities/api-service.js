import * as usersAPI from './users-api';
const BASE_URL = '/api/users';

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user; // Return user object from token payload
  } catch (error) {
    console.error("Error parsing user from token:", error);
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
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  try {
    console.log('Logging in with credentials:', credentials);
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const { user, token } = await response.json();
    localStorage.setItem('token', token);
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