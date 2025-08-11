//API URL
const API_URL = 'https://randomuser.me/api/';

export const fetchRandomUser = async (params = {}) => {
  const url = new URL(API_URL);
  url.searchParams.set('results', '1');

  // Add all parameters to the URL
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach((v) => url.searchParams.append(key, v));
      } else {
        url.searchParams.set(key, value);
      }
    }
  });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch random user');
  }
  const data = await response.json();
  return data.results[0];
};
