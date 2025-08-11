'use client';

//Import Libraries
import { useState } from 'react';
import styled from 'styled-components';

//Import ant design components
import { Spin, Typography } from 'antd';

//Import components
import { Filters } from '@/components/Filters';
import { UserCard } from '@/components/UserCard';

//Import hooks
import { useRandomUser } from '@/hooks/useRandomUser';

const { Title } = Typography;

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

export function RandomUserGenerator() {
  const [filters, setFilters] = useState({});
  const { data: user, isLoading, isError, error, refetch } = useRandomUser(filters);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Header>
        <Title level={1}>Random User Generator</Title>
        <Title level={4} type="secondary">
          Generate random user profiles for testing and development
        </Title>
      </Header>

      <Filters filters={filters} setFilters={setFilters} />

      <Spin spinning={isLoading} tip="Loading user...">
        <UserCard user={user} isLoading={isLoading} refetch={refetch} />
      </Spin>
    </Container>
  );
}
