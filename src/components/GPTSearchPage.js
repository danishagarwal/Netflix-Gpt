import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { useSelector } from "react-redux";
import { background_img } from "../utils/constants";
import GPTMoviesList from "./GPTMoviesList";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={background_img} alt="background_img" />
      </div>
      <GPTSearchBar />
      <GPTMoviesList />
    </div>
  );
};

export default GPTSearchPage;
