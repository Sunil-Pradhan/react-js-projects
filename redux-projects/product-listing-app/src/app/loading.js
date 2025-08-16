 "use client"
 
import { styled } from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress size={60} />
    </LoadingContainer>
  );
}
