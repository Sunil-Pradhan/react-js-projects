import { styled } from 'styled-components';
import Alert from '@mui/material/Alert';

const ErrorContainer = styled.div`
  margin: 20px 0;
`;

export default function ErrorDisplay({ message }) {
  return (
    <ErrorContainer>
      <Alert severity="error">{message}</Alert>
    </ErrorContainer>
  );
}
