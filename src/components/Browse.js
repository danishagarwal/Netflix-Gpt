import React from "react";
import Header from "./Header";

import useNowPlayingMoviesData from "../hooks/useNowPlayingMoviesData";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  const GPTtrueFalse = useSelector((store) => store.gpt);

  useNowPlayingMoviesData();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {GPTtrueFalse.toggleGPT ? <GPTSearchPage /> : <MainContainer />}
    </div>
  );
};

export default Browse;
