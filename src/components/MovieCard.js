import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-36 mt-2 md:w-48 pr-4">
      <img src={IMG_URL + poster} alt="" />
    </div>
  );
};

export default MovieCard;
