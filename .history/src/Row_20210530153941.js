import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';

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

      <div className="row__posters">
        {movies.map((movie) => {
          const {poster_path, backdrop_path, name, id} = movie;
          (isLargeRow && poster_path) ||
            (!isLargeRow && backdrop_path && (
              <img
                className={`row__poster ${isLargeRow && 'row__posterLarger'}`}
                key={id}
                src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
                alt={name}
              />
            ));
        })}
      </div>
    </div>
  );
}

export default Row;
