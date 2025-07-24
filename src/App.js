import React from 'react';
import RepoList from './components/RepoList';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Most Starred GitHub Repositories</h1>
        <p>Created in the last 10 days (since 2024-07-15)</p>
      </header>
      <main>
        <RepoList />
      </main>
    </div>
  );
}

export default App;