import React, { useEffect, useState } from 'react';
import { getMovies } from './services/getMovies';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMoviesRequest = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMoviesRequest(searchTerm);
  }, [searchTerm]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movie" />
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="row ">
        <MovieList allMovies={movies} />
      </div>
    </div>
  );
};

export default App;
