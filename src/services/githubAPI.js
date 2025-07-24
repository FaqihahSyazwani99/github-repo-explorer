const BASE_URL = 'https://api.github.com/search/repositories';
const BASE_DATE = '2024-07-15';


const getDate10DaysAgo = () => {
  const date = new Date();
  date.setDate(date.getDate() - 10);
  return date.toISOString().split('T')[0];
};

export const fetchRepositories = async (page = 1, signal) => {
  const createdDate = getDate10DaysAgo();
  const query = `?q=created:>${createdDate}&sort=stars&order=desc&page=${page}`;
  
  const response = await fetch(`${BASE_URL}${query}`, {
    signal,
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `GitHub API error: ${response.status}`);
  }
  
  return response.json();
};