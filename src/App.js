import React, { useEffect, useState } from 'react';
import { getMovies } from './services/getMovies';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import Like from './components/Like';
import RemoveFavorite from './components/RemoveFavorites';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('star wars');
  const [like, setLike] = useState([]);

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

  const addFavoriteMovie = (movie) => {
    const newFavoriteMovieList = [...like, movie];
    setLike(newFavoriteMovieList);
  };

  const removeFavoriteMovie = (movie) => {
    console.log(movie, 'movie filter');
    const newFavoriteMovieList = [...like, movie];

    const filteredMovies = newFavoriteMovieList.filter(
      (movieFromList) => movieFromList.imdbID != movie.imdbID
    );

    setLike(filteredMovies);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movie" />
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="row ">
        <MovieList
          allMovies={movies}
          Like={Like}
          handleMovieLike={addFavoriteMovie}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row ">
        <MovieList
          allMovies={like}
          Like={RemoveFavorite}
          handleMovieLike={removeFavoriteMovie}
        />
      </div>
    </div>
  );
};

export default App;
