'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Typography, Space, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { selectCartItems, selectCartTotal, clearCart } from '../../features/cart/cartSlice';
import CartItem from '../../components/CartItem';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';

const { Title, Text } = Typography;

const PageContainer = styled.div`
  padding: 2rem;
`;

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <Title level={2}>Your Shopping Cart</Title>

        {cartItems.length === 0 ? (
          <Card>
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <ShoppingCartOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
              <Title level={4}>Your cart is empty</Title>
              <Text type="secondary">Looks like you haven&apos;t added any items to your cart yet</Text>
              <Button type="primary" href="/">Continue Shopping</Button>
            </Space>
          </Card>
        ) : (
          <>
            <Space direction="vertical" style={{ width: '100%' }}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </Space>

            <Divider />

            <Card>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                  <Text strong>Total Items:</Text>
                  <Text>{cartItems.reduce((count, item) => count + item.quantity, 0)}</Text>
                </Space>
                <Space style={{ width: '100%', justifyContent: 'space-between' }}>
                  <Text strong>Total Price:</Text>
                  <Text strong>${cartTotal.toFixed(2)}</Text>
                </Space>

                <Space style={{ marginTop: '1rem' }}>
                  <Button type="primary">Proceed to Checkout</Button>
                  <Button danger onClick={handleClearCart}>Clear Cart</Button>
                  <Button href="/">Continue Shopping</Button>
                </Space>
              </Space>
            </Card>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default CartPage;
