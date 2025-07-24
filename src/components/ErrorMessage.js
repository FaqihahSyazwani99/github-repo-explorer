import React from 'react';

const ErrorMessage = ({ message, onRetry }) => (
  <div className="error-container">
    <p>Error: {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default ErrorMessage;