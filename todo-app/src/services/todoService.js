// Base URL for JSONPlaceholder API
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Helper function to simulate API delay
const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 500));

// Fetch all todos
export const getTodos = async () => {
  await simulateDelay();
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const todos = await response.json();
  return todos.slice(0, 10); // Limit to 10 todos
};

// Add a new todo (mock implementation)
export const addTodo = async (title) => {
  await simulateDelay();
  // Return a mock todo object
  return {
    id: Date.now(),
    title,
    completed: false,
    userId: 1,
  };
};

// Update a todo (mock implementation)
export const updateTodo = async (todo) => {
  await simulateDelay();
  // Return the updated todo
  return todo;
};

// Delete a todo (mock implementation)
export const deleteTodo = async (id) => {
  await simulateDelay();
  // Return the deleted ID
  return id;
};
