'use client';

import { Checkbox, Button, Input, Space, Typography } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { useUpdateTodo, useDeleteTodo } from '@/hooks/useMutateTodo';

const { Text } = Typography;

// Styled component for the todo item container
const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

/**
 * TodoItem component displays a single todo item
 * Handles editing, toggling completion, and deletion
 */
const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  // Handle updating todo title
   const handleUpdate = () => {
    if (editedTitle.trim()) {
      updateTodo({ ...todo, title: editedTitle });
      setIsEditing(false);
    }
  };

  // Handle toggling todo completion status
  const handleToggleComplete = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  // Handle deleting todo
   const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <TodoItemContainer>
      {/* Checkbox for completion status */}
      <Checkbox checked={todo.completed} onChange={handleToggleComplete} />

      {isEditing ? (
        // Edit mode UI
        <Space style={{ marginLeft: 16, flex: 1 }}>
          <Input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onPressEnter={handleUpdate}
            autoFocus
          />
          <Button type="primary" onClick={handleUpdate}>
            Save
          </Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        </Space>
      ) : (
        // View mode UI
        <Space style={{ marginLeft: 16, flex: 1 }}>
          <Text
            style={{
              flex: 1,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#999' : '#333',
            }}
          >
            {todo.title}
          </Text>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button danger onClick={handleDelete}>
            Delete
          </Button>
        </Space>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
