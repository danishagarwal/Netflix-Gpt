import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";

const MainContainer = () => {
  const moviesData = useSelector(
    (redux_store) => redux_store.movies?.nowPlaying
  );

  if (moviesData === null) {
    return;
  }

  //Extracting The playing movie trailer - 1 movie
  const mainMovie = moviesData[0];
  console.log(mainMovie);

  const original_title = mainMovie.original_title;
  const overview = mainMovie.overview;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground />
    </div>
  );
};

export default MainContainer;