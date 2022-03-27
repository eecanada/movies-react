import React, { useState } from 'react';
import { getMovies } from './services/getMovies';
import './App.css';

import MovieList from './components/MovieList';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [movies, setMovies] = useState(getMovies());
  return (
    <div className="container-fluid movie-app">
      <div className="row ">
        <MovieList allMovies={movies} />
      </div>
    </div>
  );
};

export default App;
