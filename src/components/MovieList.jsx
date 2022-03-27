import React from 'react';

const MovieList = ({ allMovies }) => {
  return (
    <>
      {allMovies.map((movie, index) => {
        return (
          <div className="d-flex justify-content-start m-3" key={index}>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
