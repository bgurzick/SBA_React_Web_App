
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function WatchMaybe() {
  const [watchList, setWatchList] = useState([]);

  // useEffect to load watch list
  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    setWatchList(storedWatchList);
  }, []);

  // for item removal from watch list
  const handleRemoveFromWatchMaybe = (imdbID) => {
    const updatedWatchList = watchList.filter(movie => movie.imdbID !== imdbID);
    setWatchList(updatedWatchList);
    localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
  };

  return (
    <div className="container">
      <h1>Watch Maybe List</h1>

      <div className="movie-list">
        {watchList.length > 0 ? (
          watchList.map(movie => (
            <div key={movie.imdbID} className="movie-card">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <p>{movie.Plot}</p>
              <button onClick={() => handleRemoveFromWatchMaybe(movie.imdbID)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No movies added to watch list yet.</p>
        )}
      </div>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default WatchMaybe;
