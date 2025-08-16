 "use client"


import { useEffect } from 'react';
import { styled } from 'styled-components';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorContainer>
      <Alert severity="error" sx={{ mb: 3 }}>
        Something went wrong!
      </Alert>
      <Button variant="contained" onClick={() => reset()}>
        Try again
      </Button>
    </ErrorContainer>
  );
}
