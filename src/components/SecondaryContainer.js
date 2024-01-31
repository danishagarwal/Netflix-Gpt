import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-44">
          <MoviesList title={"Now Playing"} moviesData={movies.nowPlaying} />
          <MoviesList title={"Upcoming"} moviesData={movies.upComing} />
          <MoviesList title={"Popular"} moviesData={movies.popular} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
