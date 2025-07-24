import React from 'react';

const RepoItem = ({ repo }) => (
  <div className="repo-item">
    <div className="repo-header">
      <h2>
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
      </h2>
      <div className="stars">⭐ {repo.stargazers_count.toLocaleString()}</div>
    </div>
    
    <p className="description">{repo.description || 'No description'}</p>
    
    <div className="owner-info">
      <img 
        src={repo.owner.avatar_url} 
        alt={repo.owner.login} 
        className="avatar"
      />
      <span>{repo.owner.login}</span>
    </div>
  </div>
);

export default RepoItem;