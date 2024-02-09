import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { useSelector } from "react-redux";
import { background_img } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={background_img} alt="background_img" />
      </div>
      <GPTSearchBar />
    </div>
  );
};

export default GPTSearchPage;
