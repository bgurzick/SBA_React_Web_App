
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCardButton({ movie, onNextClick, onWatchMaybeClick }) {
  const handleAddToWatchMaybe = () => {
    onWatchMaybeClick(movie);
  };

  return (
    <div className="add-to-watch-maybe">
      <button onClick={handleAddToWatchMaybe}>Add to Watch Maybe</button>
      
    </div>
  );
}

export default MovieCardButton;
