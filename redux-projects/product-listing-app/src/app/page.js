 "use client"

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import ProductList from '../components/ProductList';
import Typography from '@mui/material/Typography';
import { styled } from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
`;

export default function HomePage() {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <LoadingSpinner />;
  } else if (status === 'failed') {
    content = <ErrorDisplay message={error} />;
  } else if (status === 'succeeded') {
    content = <ProductList products={products} />;
  }

  return (
    <PageContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      {content}
    </PageContainer>
  );
}
