import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Row({title, fetchUrl, isLargeRow = false}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
