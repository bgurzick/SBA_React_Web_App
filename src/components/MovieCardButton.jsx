
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCardButton({ movie, onNextClick, onWatchMaybeClick }) {
    
    return (
    <div className="card-buttons">
      <button className="movie-button" onClick={onNextClick}>Next</button>
      <button className="movie-button" onClick={() => onWatchMaybeClick(movie)}>Add to Watch Maybe</button>
    </div>
  );
}

export default MovieCardButton;
