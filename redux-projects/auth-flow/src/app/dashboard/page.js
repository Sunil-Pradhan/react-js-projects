'use client';

import { useSelector } from 'react-redux';
import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import AuthGuard from '@/components/AuthGuard';

const StyledContainer = styled(Container)`
  padding: 2rem;
`;

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <AuthGuard>
      <StyledContainer>
        <Typography variant="h4" gutterBottom>
          Welcome to your Dashboard
        </Typography>
        {user && (
          <Box>
            <Typography variant="body1">
              Hello, {user.name}!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You are logged in with email: {user.email}
            </Typography>
          </Box>
        )}
      </StyledContainer>
    </AuthGuard>
  );
};

export default DashboardPage;
