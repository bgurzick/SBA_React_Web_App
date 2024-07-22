import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
  return (
    <div className="container">
      <h1>JUST PICK A MOVIE ALREADY!</h1>
      <Link to="/year/2020">
        <div className="year-card">
          <h2>2020</h2>
          <p>Click to reveal 20 movies from 2020</p>
        </div>
      </Link>
      <Link to="/year/2010">
        <div className="year-card">
          <h2>2010</h2>
          <p>Click to reveal 10 movies from 2010</p>
        </div>
      </Link>
      <Link to="/year/1990">
        <div className="year-card">
          <h2>1990</h2>
          <p>Click to reveal 90 movies from 1990</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
