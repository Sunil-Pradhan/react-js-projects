import { styled } from 'styled-components';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';

const ProductsGrid = styled(Grid)`
  margin-top: 20px;
`;

export default function ProductList({ products }) {
  return (
    <ProductsGrid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </ProductsGrid>
  );
}
