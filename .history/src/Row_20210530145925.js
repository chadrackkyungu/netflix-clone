import React, {useState, useEffect} from 'react';

function Row({title, fetchUrl, isLargeRow = false}) {
  const [movies, setMovies] = useState(initialState);
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
