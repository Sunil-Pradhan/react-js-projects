'use client';

// Simple client-side auth state
let isAuthenticated = false;
let user = null;

if (typeof window !== 'undefined') {
  isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  user = localStorage.getItem('user');
}

export const auth = {
  get isAuthenticated() {
    return isAuthenticated;
  },

  get user() {
    return user;
  },

  login(userData) {
    isAuthenticated = true;
    user = userData;
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
    }
  },

  logout() {
    isAuthenticated = false;
    user = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    }
  }
};
