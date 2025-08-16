import { styled } from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  );
}
