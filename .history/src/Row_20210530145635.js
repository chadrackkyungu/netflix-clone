import React from 'react';

function Row({title, fetchUrl, isLargeRow}) {
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
