import React, {useState, useEffect} from 'react';
import axios from './axios';

function Row({title, fetchUrl, isLargeRow = false}) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      {movies.map((movie) => {
        const {poster_path, backdrop_path, name} = movie;
        return (
          <img
            src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
            alt={name}
          />
        );
      })}
    </div>
  );
}

export default Row;
