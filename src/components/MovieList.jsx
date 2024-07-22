
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function MovieList({ match }) {
  const year = match.params.year;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_apiKey}&y=${year}`);
        setMovies(response.data.Search);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [year]);

  return (
    <div>
      <h1>Movies from {year}</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.imdbID} className="movie-card">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
