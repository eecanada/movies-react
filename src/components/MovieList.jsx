import React from 'react';

const MovieList = ({ allMovies, Like, handleMovieLike }) => {
  return (
    <>
      {allMovies.map((movie, index) => {
        return (
          <div
            className="d-flex justify-content-start m-3 image-container"
            key={index}
          >
            <img src={movie.Poster} alt={movie.Title} />
            <div
              onClick={() => handleMovieLike(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <Like />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
