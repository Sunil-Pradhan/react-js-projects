'use client';

import { Spin, Empty, Alert } from 'antd';
import styled from 'styled-components';
import { useTodos } from '@/hooks/useTodos';
import TodoItem from './TodoItem';

// Styled component for the list container
const ListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

/**
 * TodoList component displays all todos
 * Handles loading, error, and empty states
 */
const TodoList = () => {
  const { data: todos = [], isLoading, isError, error } = useTodos();

  // Loading state
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <Spin size="large" tip="Loading todos..." />
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <Alert
        message="Error"
        description={`Failed to load todos: ${error.message}`}
        type="error"
        showIcon
        style={{ margin: '20px' }}
      />
    );
  }

  // Empty state
  if (!todos || todos.length === 0) {
    return <Empty description="No todos found" />;
  }

  // Success state
  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
};

export default TodoList;
