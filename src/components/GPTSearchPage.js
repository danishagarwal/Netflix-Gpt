import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { useSelector } from "react-redux";
import { background_img } from "../utils/constants";
import GPTMoviesList from "./GPTMoviesList";

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen md:h-screen sm:h-screen sm:w-screen sm:object-cover"
          src={background_img}
          alt="background_img"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMoviesList />
      </div>
    </>
  );
};

export default GPTSearchPage;
