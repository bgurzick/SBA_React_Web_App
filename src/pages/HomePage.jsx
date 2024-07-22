
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCardButton from '../components/MovieCardButton';
import '../App.css';

function HomePage() {
  const [moviesBear, setMoviesBear] = useState([]);
  const [moviesFish, setMoviesFish] = useState([]);
  const [moviesJazz, setMoviesJazz] = useState([]);
  const [currentBearIndex, setCurrentBearIndex] = useState(0);
  const [currentFishIndex, setCurrentFishIndex] = useState(0);
  const [currentJazzIndex, setCurrentJazzIndex] = useState(0);
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
    fetchMoviesByKeyword('bear', setMoviesBear);
    fetchMoviesByKeyword('fish', setMoviesFish);
    fetchMoviesByKeyword('jazz', setMoviesJazz);
  }, []);

  const handleNextBear = () => {
    setCurrentBearIndex((prevIndex) => (prevIndex + 1) % moviesBear.length);
  };

  const handleNextFish = () => {
    setCurrentFishIndex((prevIndex) => (prevIndex + 1) % moviesFish.length);
  };

  const handleNextJazz = () => {
    setCurrentJazzIndex((prevIndex) => (prevIndex + 1) % moviesJazz.length);
  };

  
  const [watchMaybeList, setWatchMaybeList] = useState([]);

  const handleWatchMaybe = (movie) => {
    // check if movie is in the list already
    if (!watchMaybeList.some((m) => m.imdbID === movie.imdbID)) {
        setWatchMaybeList([...watchMaybeList, movie]);
        localStorage.setItem('watchList', JSON.stringify([...watchMaybeList, movie]));
    }
  };

  return (
    <div className="container">
      <h1>JUST PICK A MOVIE ALREADY!</h1>

      <Link to={{ pathname: `/watch-maybe`, state: { watchMaybeList } }} className="goto-watch-maybe-btn">Go to Watch Maybe
    </Link>

      <div className="year-card">
        <h2>films with "bear" in the title</h2>
        {error && <p className="error-message">{error}</p>}
        {moviesBear.length > 0 && (
          <>
            <div className="movie-display">
              <h3>{moviesBear[currentBearIndex].Title}</h3>
              <p>{moviesBear[currentBearIndex].Year}</p>
            </div>
            <div className="movie-buttons">
                <button onClick={handleNextBear}>Next</button>
            <MovieCardButton
              movie={moviesBear[currentBearIndex]}
              onNextClick={handleNextBear}
              onWatchMaybeClick={handleWatchMaybe}
            />
            </div>
          </>
        )}
      </div>

      
      <div className="year-card">
        <h2>films with "fish" in the title</h2>
        {error && <p className="error-message">{error}</p>}
        {moviesFish.length > 0 && (
          <>
            <div className="movie-display">
              <h3>{moviesFish[currentFishIndex].Title}</h3>
              <p>{moviesFish[currentFishIndex].Year}</p>
            </div>
            <div className="movie-buttons">
                <button onClick={handleNextFish}>Next</button>

            <MovieCardButton
              movie={moviesFish[currentFishIndex]}
              onNextClick={handleNextFish}
              onWatchMaybeClick={handleWatchMaybe}
            />
            </div>
          </>
        )}
      </div>

      
      <div className="year-card">
        <h2>films with "jazz" in the title</h2>
        {error && <p className="error-message">{error}</p>}
        {moviesJazz.length > 0 && (
          <>
            <div className="movie-display">
              <h3>{moviesJazz[currentJazzIndex].Title}</h3>
              <p>{moviesJazz[currentJazzIndex].Year}</p>
            </div>
            <div className="movie-buttons">
                <button onClick={handleNextJazz}>Next</button>
            
            <MovieCardButton
              movie={moviesJazz[currentJazzIndex]}
              onNextClick={handleNextJazz}
              onWatchMaybeClick={handleWatchMaybe}
            />
            </div>
          </>
        )}
      </div>

    </div>
  );
}

export default HomePage;
