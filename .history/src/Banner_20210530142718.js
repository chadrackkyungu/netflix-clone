import React, {useState, useEffect} from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Request';

function Banner() {
  //getting all the movies from the API
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginials);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  // this is a function that will cut if the string is more then 150 text
  const truncate = (paragraph_Description, number_of_Text) => {
    return paragraph_Description?.length > number_of_Text
      ? paragraph_Description.substr(0, number_of_Text - 1) + '...'
      : paragraph_Description;
  };
  //   end
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center',
        backgroundColor: '#92ddff',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>

        <div className="banner__buttons">
          <button className="banner__button">Paly</button>
          <button className="banner__button">My list</button>
        </div>

        <h1 className="banner__description">
          {/* this is our func on top we pass him 2 param the string and the number */}
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam adipisci neque dicta ipsam deleniti quos odit? Eum, nihil unde alias corporis officiis qui, voluptate quam ex necessitatibus animi culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium quae itaque illum deserunt ipsa repudiandae numquam laborum quaerat perferendis quisquam minima facere ratione dignissimos vitae, nihil obcaecati, eveniet id? .`,
            150 //this is the number
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
