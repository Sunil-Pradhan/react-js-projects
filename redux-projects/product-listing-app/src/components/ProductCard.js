import { styled } from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StyledCardMedia = styled(CardMedia)`
  /* padding-top: 56.25%; // 16:9 aspect ratio
  background-size: contain;
  background-position: center; */
  object-fit: contain;
  object-position: center;
  width: 200px;
  height: 200px;
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const PriceText = styled(Typography)`
  color: #1976d2;
  font-weight: bold;
  margin: 10px 0;
`;

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <StyledCard>
        <StyledCardMedia
          image={product.image}
          title={product.title}
        />
        <StyledCardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {product.title}
          </Typography>
          <PriceText variant="h6">
            ${product.price}
          </PriceText>
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
        </StyledCardContent>
        <Button size="small" color="primary" sx={{ margin: 1 }}>
          View Details
        </Button>
      </StyledCard>
    </Link>
  );
}
