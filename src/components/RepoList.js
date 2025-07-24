import React from 'react';
import RepoItem from './RepoItem';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import DebugInfo from './DebugInfo';
import { useFetchRepos } from '../hooks/useFetchRepos';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const RepoList = () => {
  const { repos, loading, error, hasMore, loadMore } = useFetchRepos();
  useInfiniteScroll(loadMore, hasMore, loading);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="repo-list">
      <DebugInfo page={Math.ceil(repos.length / 30)} itemCount={repos.length} />
      
      {error ? (
        <ErrorMessage message={error} onRetry={handleRetry} />
      ) : (
        <>
          {repos.map(repo => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
          
          {loading && <LoadingSpinner />}
          
          {!hasMore && !loading && repos.length > 0 && (
            <div className="end-message">
              You've reached the end of the repository list
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RepoList;