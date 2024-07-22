
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCardButton from '../components/MovieCardButton';
import '../App.css';

function HomePage() {
  const [moviesIf, setMoviesIf] = useState([]);
  const [moviesBut, setMoviesBut] = useState([]);
  const [moviesHow, setMoviesHow] = useState([]);
  const [currentIfIndex, setCurrentIfIndex] = useState(0);
  const [currentButIndex, setCurrentButIndex] = useState(0);
  const [currentHowIndex, setCurrentHowIndex] = useState(0);
  const [error, setError] = useState(null); 

  //useEffect and Axios GET requirement
  useEffect(() => {
    const fetchMoviesByKeyword = async (keyword, setterFunction) => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=435a37d1&s=${keyword}&type=movie`);
        if (response.data.Response === 'True') {
          setterFunction(response.data.Search || []);
          setError(null); 
        } else {
          // API error handling
          setError(response.data.Error || `No movies found for "${keyword}".`);
        }
      } catch (error) {
        console.error(`Error fetching "${keyword}" movies:`, error);
        setError(`Error fetching "${keyword}" movies. Please try again later.`);
      }
    };

    // fetch movies based on designated keyword
    fetchMoviesByKeyword('bear', setMoviesIf);
    fetchMoviesByKeyword('fish', setMoviesBut);
    fetchMoviesByKeyword('jazz', setMoviesHow);
  }, []);

  const handleNextIf = () => {
    setCurrentIfIndex((prevIndex) => (prevIndex + 1) % moviesIf.length);
  };

  const handleNextBut = () => {
    setCurrentButIndex((prevIndex) => (prevIndex + 1) % moviesBut.length);
  };

  const handleNextHow = () => {
    setCurrentHowIndex((prevIndex) => (prevIndex + 1) % moviesHow.length);
  };

  const handleWatchMaybe = (movie) => {
    // make a way to save WatchMaybe choices
    console.log('Adding to Watch Maybe:', movie);
  };

  return (
    <div className="container">
      <h1>JUST PICK A MOVIE ALREADY!</h1>

      <div className="year-card">
        <h2>films with "bear" in the title</h2>
        {error && <p className="error-message">{error}</p>}
        {moviesIf.length > 0 && (
          <>
            <div className="movie-display">
              <h3>{moviesIf[currentIfIndex].Title}</h3>
              <p>{moviesIf[currentIfIndex].Year}</p>
              <p>Type: {moviesIf[currentIfIndex].Type}</p>
            </div>
            <MovieCardButton
              movie={moviesIf[currentIfIndex]}
              onNextClick={handleNextIf}
              onWatchMaybeClick={handleWatchMaybe}
            />
          </>
        )}
      </div>

      
      <div className="year-card">
        <h2>films with "fish" in the title</h2>
        {error && <p className="error-message">{error}</p>}
        {moviesBut.length > 0 && (
          <>
            <div className="movie-display">
              <h3>{moviesBut[currentButIndex].Title}</h3>
              <p>{moviesBut[currentButIndex].Year}</p>
              <p>Type: {moviesBut[currentButIndex].Type}</p>
            </div>
            <MovieCardButton
              movie={moviesBut[currentButIndex]}
              onNextClick={handleNextBut}
              onWatchMaybeClick={handleWatchMaybe}
            />
          </>
        )}
      </div>

      
      <div className="year-card">
        <h2>films with "jazz" in the title</h2>
        {error && <p className="error-message">{error}</p>}
        {moviesHow.length > 0 && (
          <>
            <div className="movie-display">
              <h3>{moviesHow[currentHowIndex].Title}</h3>
              <p>{moviesHow[currentHowIndex].Year}</p>
              <p>Type: {moviesHow[currentHowIndex].Type}</p>
            </div>
            <MovieCardButton
              movie={moviesHow[currentHowIndex]}
              onNextClick={handleNextHow}
              onWatchMaybeClick={handleWatchMaybe}
            />
          </>
        )}
      </div>

    </div>
  );
}

export default HomePage;
