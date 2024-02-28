import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, moviesData }) => {
  //console.log(moviesData?.poster_path);
  return (
    <div className="relative p-6">
      <h1 className="text-white md:text-3xl py-1">{title}</h1>
      <div className="flex md:overflow-x-scroll">
        <div className="flex flex-wrap md:flex-nowrap">
          {moviesData?.map((movie, index) => (
            <MovieCard key={index} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
