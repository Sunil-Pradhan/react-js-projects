'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

// This component provides the Tanstack Query context to the entire app
const QueryProvider = ({ children }) => {
  // Create a new QueryClient instance only once using useState
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // Disable automatic refetching on window focus
          },
        },
      })
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}

        {/* Optional: Add React Query Devtools for development */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default QueryProvider;
