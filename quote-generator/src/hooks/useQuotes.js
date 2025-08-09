//Import Libraries
import { useQuery } from '@tanstack/react-query';

//Import custom services
import {
  fetchRandomQuote,
  fetchQuotesByAuthor,
  fetchQuotesByTag,
  fetchTags,
} from '@/services/quoteService';

// Hook to fetch a random quote
export const useRandomQuote = () => {
  return useQuery({
    queryKey: ['randomQuote'],
    queryFn: fetchRandomQuote,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};

// Hook to fetch quotes by author
export const useQuotesByAuthor = (author) => {
  return useQuery({
    queryKey: ['quotesByAuthor', author],
    queryFn: () => fetchQuotesByAuthor(author),
    enabled: !!author, // Only fetch if author is provided
  });
};

// Hook to fetch quotes by specific tag
export const useQuotesByTag = (tag) => {
  return useQuery({
    queryKey: ['quotesByTag', tag],
    queryFn: () => fetchQuotesByTag(tag),
    enabled: !!tag, // Only fetch if tag is provided
  });
};

// Hook to fetch all available tags
export const useTags = () => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: fetchTags,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });
};
