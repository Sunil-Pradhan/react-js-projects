import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo, updateTodo, deleteTodo } from '@/services/todoService';
import { message } from 'antd';

/**
 * Custom hook for adding todos
 * Handles mutation and updates the cache
 */
export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries(['todos']);

      // Optimistically update the cache
      const previousTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData(['todos'], (old) => [
        ...old,
        {
          id: Date.now(), // Temporary ID
          title: newTodo,
          completed: false,
          userId: 1,
        },
      ]);

      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
      message.error(`Failed to add todo: ${err.message}`);
    },
    onSuccess: () => {
      message.success('Todo added successfully!');
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries(['todos']);
    // },
  });
};

/**
 * Custom hook for updating todos
 * Handles mutation and updates the cache
 */
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries(['todos']);

      const previousTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData(['todos'], (old) =>
        old.map((todo) =>
          todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
        )
      );

      return { previousTodos };
    },
    onError: (err, updatedTodo, context) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
      message.error(`Failed to update todo: ${err.message}`);
    },
    onSuccess: () => {
      message.success('Todo updated successfully!');
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries(['todos']);
    // },
  });
};

/**
 * Custom hook for deleting todos
 * Handles mutation and updates the cache
 */
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries(['todos']);

      const previousTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData(['todos'], (old) =>
        old.filter((todo) => todo.id !== id)
      );

      return { previousTodos };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
      message.error(`Failed to delete todo: ${err.message}`);
    },
    onSuccess: () => {
      message.success('Todo deleted successfully!');
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries(['todos']);
    // },
  });
};
