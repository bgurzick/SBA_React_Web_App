
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WatchMaybe from './pages/WatchMaybe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/watch-maybe" element={<WatchMaybe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
