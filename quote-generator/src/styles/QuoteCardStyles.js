//Import Libraries
import styled from 'styled-components';

//Import ant design components
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

// Container for the quote content
export const QuoteContainer = styled.div`
  padding: 24px;
  text-align: center;
  /* border: 1px solid red; */
`;

// Container for action buttons
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  /* border: 1px solid red; */
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 200px;
  align-items: center;
  /* border: 1px solid red; */
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 200px;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  /* border: 1px solid red; */
`;
