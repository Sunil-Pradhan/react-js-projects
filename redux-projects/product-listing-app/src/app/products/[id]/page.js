'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetails } from '../../../features/products/productsSlice';
import LoadingSpinner from '../../../components/LoadingSpinner';
import ErrorDisplay from '../../../components/ErrorDisplay';
import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const ProductDetailsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductImage = styled(CardMedia)`
  width: 100%;
  height: 300px;
  background-size: contain;
  @media (min-width: 768px) {
    width: 50%;
    height: 400px;
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const BackButton = styled(Button)`
  margin-top: 20px;
`;

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id;
  const dispatch = useDispatch();
  const { selectedProduct, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [productId, dispatch]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'failed') {
    return <ErrorDisplay message={error} />;
  }

  if (!selectedProduct) {
    return null;
  }

  return (
    <ProductContainer>
      <Typography variant="h4" component="h1">
        {selectedProduct.title}
      </Typography>

      <ProductDetailsCard>
        <ProductImage
          image={selectedProduct.image}
          title={selectedProduct.title}
        />
        <ProductInfo>
          <Typography variant="h5" component="h2" gutterBottom>
            ${selectedProduct.price}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating
              name="read-only"
              value={selectedProduct.rating?.rate || 0}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({selectedProduct.rating?.count || 0} reviews)
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {selectedProduct.description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Category: {selectedProduct.category}
          </Typography>
        </ProductInfo>
      </ProductDetailsCard>

      <Link href="/" passHref>
        <BackButton variant="contained" color="primary">
          Back to Products
        </BackButton>
      </Link>
    </ProductContainer>
  );
}
