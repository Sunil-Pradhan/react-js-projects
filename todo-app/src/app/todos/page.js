'use client';

import styled from 'styled-components';
import TodoForm from '@/components/todos/TodoForm';
import TodoList from '@/components/todos/TodoList';

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  color: #1890ff;
`;

const TodosPage = () => {
  return (
    <PageContainer>
      <Title>Todo App</Title>
      <TodoForm />
      <TodoList />
    </PageContainer>
  );
};

export default TodosPage;
