import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTMoviesList = () => {
  const gptMovie = useSelector((store) => store.gpt.moviesData);

  if (!gptMovie) return null;
  return (
    <div className="bg-opacity-30 bg-black mt-2">
      <MoviesList title={"Results"} moviesData={gptMovie} />
    </div>
  );
};

export default GPTMoviesList;
