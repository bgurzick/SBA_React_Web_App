
import React from 'react';
import { useLocation } from 'react-router-dom';

function WatchMaybe() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div className="container">
      <h1>Watch Maybe</h1>
      <div className="movie-details">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <p>Type: {movie.Type}</p>
      </div>
    </div>
  );
}

export default WatchMaybe;
