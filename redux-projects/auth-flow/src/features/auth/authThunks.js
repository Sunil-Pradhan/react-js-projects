import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../lib/api';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${api.baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const userData = await response.json();

      // In a real app, the API would return a token
      // For our mock, we'll create one
      const mockToken = 'mock-token-' + Math.random().toString(36).substring(2);

      return {
        user: userData,
        token: mockToken
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
