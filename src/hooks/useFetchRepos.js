import { useState, useEffect, useCallback } from 'react';
import { fetchRepositories } from '../services/githubAPI';

export const useFetchRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async (signal) => {
    if (!hasMore) return;
    
    try {
      setLoading(true);
      const data = await fetchRepositories(page, signal);
      
      // GitHub returns 30 items per page by default
      setRepos(prev => [...prev, ...data.items]);
      setHasMore(data.items.length > 0);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, [page, hasMore]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController.signal);
    
    return () => abortController.abort();
  }, [fetchData]);

  const loadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  return { repos, loading, error, hasMore, loadMore, retry: () => setPage(1) };
};