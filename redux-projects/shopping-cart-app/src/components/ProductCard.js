import React from 'react';
import { Card, Button, Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import styled from 'styled-components';
import Image from 'next/image';

const StyledCard = styled(Card)`
  width: 300px;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  .ant-card-cover {
    height: 200px;
    position: relative;
  }

  .price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #1890ff;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
  };

  return (
    <StyledCard
      cover={
        <div className="ant-card-cover">
          <Image
            alt={product.name}
            src={product.image}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      }
    >
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="actions">
        <span className="price">${product.price.toFixed(2)}</span>
        <Button type="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
      <Rate defaultValue={4} disabled style={{ marginTop: '10px' }} />
    </StyledCard>
  );
};

export default ProductCard;
