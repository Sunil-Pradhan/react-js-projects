import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      description: 'High-quality wireless headphones with noise cancellation',
      image: '/headphones.png',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      description: 'Latest smart watch with health monitoring features',
      image: '/smartwatch.png',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 59.99,
      description: 'Portable bluetooth speaker with 20h battery life',
      image: '/speaker.png',
    },
    {
      id: 4,
      name: 'Laptop Backpack',
      price: 49.99,
      description: 'Durable backpack with USB charging port',
      image: '/backpack.png',
    },
    {
      id: 5,
      name: 'Wireless Mouse',
      price: 29.99,
      description: 'Ergonomic wireless mouse with silent clicks',
      image: '/mouse.png',
    },
  ],
  status: 'idle',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
