'use client';

import { Button, Input, Space } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { useAddTodo } from '@/hooks/useMutateTodo';

// Styled component for the form container
const FormContainer = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

/**
 * TodoForm component for adding new todos
 * Handles form submission and validation
 */
const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { mutate: addTodo, isLoading } = useAddTodo();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Space.Compact style={{ width: '100%' }}>
          <Input
            placeholder="Add a new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="large"
            disabled={isLoading}
          />
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            disabled={!title.trim()}
          >
            Add
          </Button>
        </Space.Compact>
      </form>
    </FormContainer>
  );
};

export default TodoForm;
