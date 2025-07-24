import { useEffect } from 'react';

export const useInfiniteScroll = (loadMore, hasMore, isLoading) => {
  useEffect(() => {
    if (!hasMore || isLoading) return;

    const handleScroll = () => {
      const scrollThreshold = 100;
      const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
      const pageHeight = document.documentElement.offsetHeight;
      const isNearBottom = pageHeight - scrollPosition < scrollThreshold;

        if (isNearBottom) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore, hasMore, isLoading]);
};