// Website : https://quoteslate.vercel.app/

const API_URL = 'https://quoteslate.vercel.app/api';

// Fetch a random quote
export const fetchRandomQuote = async () => {
  const response = await fetch(`${API_URL}/quotes/random`);
  if (!response.ok) {
    throw new Error('Failed to fetch random quote');
  }
  return response.json();
};

// Fetch all quotes (for tags and other filtering)
export const fetchAllQuotes = async () => {
  const response = await fetch(`${API_URL}/quotes`);
  if (!response.ok) {
    throw new Error('Failed to fetch all quotes');
  }
  return response.json();
};

// Fetch quotes by a specific author
export const fetchQuotesByAuthor = async (author) => {
  const response = await fetch(`${API_URL}/quotes?author=${encodeURIComponent(author)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch quotes by author');
  }
  const result = await response.json();
  return result.data || []; // Return the data array or empty array if not present
};

// Fetch all available tags
export const fetchTags = async () => {
  const response = await fetch(`${API_URL}/tags`);
  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }
  return response.json();
};

// Fetch quotes by a specific tag
export const fetchQuotesByTag = async (tag) => {
  const response = await fetch(`${API_URL}/quotes?tags=${encodeURIComponent(tag)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch quotes by tag');
  }
  return response.json();
};
