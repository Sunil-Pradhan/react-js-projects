'use client'; // Error boundaries must be Client Components

//Import Libraries
import { useEffect } from 'react';
import styled from 'styled-components';

//Import ant design components
import { Alert, Button } from 'antd';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <Alert
        message="Something went wrong!"
        description={error.message}
        type="error"
        showIcon
        action={
          <Button
            size="small"
            danger
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            style={{ marginLeft: 16 }}
          >
            Try Again
          </Button>
        }
      />
    </Container>
  );
}
