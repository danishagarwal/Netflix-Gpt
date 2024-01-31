import React from "react";
import Header from "./Header";

import useNowPlayingMoviesData from "../hooks/useNowPlayingMoviesData";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMoviesData();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
