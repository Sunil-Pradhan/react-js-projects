'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Container, Typography, Button } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
`;


export default function Home() {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/dashboard');
    }
  }, [token, router]);

  return (
    <>
      <Navbar />
      <StyledContainer>
        <Typography variant="h2" gutterBottom>
          Welcome to Auth Flow
        </Typography>
        <Typography variant="body1" paragraph>
          A complete authentication flow built with Next.js, Redux Toolkit, and Material UI
        </Typography>
        {!token && (
          <Button
            variant="contained"
            size="large"
            href="/login"
          >
            Get Started
          </Button>
        )}
      </StyledContainer>
    </>
  );
}
