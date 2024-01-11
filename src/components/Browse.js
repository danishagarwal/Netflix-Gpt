import React from "react";
import Header from "./Header";

import useNowPlayingMoviesData from "../hooks/useNowPlayingMoviesData";

const Browse = () => {
  useNowPlayingMoviesData();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
