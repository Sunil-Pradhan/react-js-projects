import React from 'react';
import { Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../features/cart/cartSlice';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1890ff;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .cart-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Navbar = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <StyledNavbar>
      <Link href="/" className="logo">ShopEasy</Link>
      <Link href="/cart">
        <Button type="primary" className="cart-button">
          <ShoppingCartOutlined />
          <Badge count={cartCount} style={{ backgroundColor: '#52c41a' }} />
        </Button>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
