import React from 'react';

const DebugInfo = ({ page, itemCount }) => (
  <div className="debug-info">
    <p>Page: {page} | Items: {itemCount}</p>
  </div>
);

export default DebugInfo;