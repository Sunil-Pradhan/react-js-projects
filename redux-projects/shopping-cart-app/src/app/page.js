'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Typography } from 'antd';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const { Title } = Typography;

const PageContainer = styled.div`
  padding: 2rem;
`;

export default function Home() {
  const products = useSelector((state) => state.products.items);


  return (
    <>
      <Navbar />
      <PageContainer>
        <Title level={2}>Our Products</Title>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </PageContainer>
    </>
  );
}
