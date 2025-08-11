import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/services/todoService';

/**
 * Custom hook to fetch todos
 * Uses React Query for caching, background updates, and error handling
 */
export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'], // Unique key for this query
    queryFn: getTodos, // Function to fetch data
    //staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    refetchInterval: false, // Disable automatic refetching
  });
};
