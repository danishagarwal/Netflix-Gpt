import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, moviesData }) => {
  console.log(moviesData?.poster_path);
  return (
    <div className="relative p-6">
      <h1 className="text-white text-3xl py-1">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesData?.map((movie) => (
            <MovieCard poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
