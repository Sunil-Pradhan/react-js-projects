import styled from 'styled-components';
import { Card, Row, Col } from 'antd';

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const DetailRow = styled(Row)`
  margin-bottom: 8px;
`;

export const DetailLabel = styled(Col)`
  font-weight: bold;
  color: #666;
`;

export const DetailValue = styled(Col)`
  color: #333;
`;
