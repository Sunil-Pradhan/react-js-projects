import React from 'react';
import { Button, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import styled from 'styled-components';
import Image from 'next/image';

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;

  .item-info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .image-container {
      position: relative;
      width: 80px;
      height: 80px;

      img {
        border-radius: 4px;
      }
    }

    .details {
      h4 {
        margin: 0;
      }

      p {
        margin: 0;
        color: #1890ff;
        font-weight: bold;
      }
    }
  }

  .item-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (value) => {
    dispatch(updateQuantity({ id: item.id, quantity: value }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <CartItemContainer>
      <div className="item-info">
        <div className="image-container">
          <Image
            src={item.image}
            alt={item.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="80px"
          />
        </div>
        <div className="details">
          <h4>{item.name}</h4>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="item-actions">
        <InputNumber
          min={1}
          max={10}
          defaultValue={item.quantity}
          onChange={handleQuantityChange}
        />
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={handleRemove}
        />
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
