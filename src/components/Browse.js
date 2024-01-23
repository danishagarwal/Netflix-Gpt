import React from "react";
import Header from "./Header";

import useNowPlayingMoviesData from "../hooks/useNowPlayingMoviesData";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMoviesData();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
