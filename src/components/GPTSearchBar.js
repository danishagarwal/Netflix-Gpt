import React from "react";
import { background_img } from "../utils/constants";
import lang from "../utils/language";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form className="mx-2 w-1/2 grid grid-cols-12 bg-black">
        <input
          type="text"
          className="text-sm p-4 m-4 col-span-9 opacity-80"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleClick}
          className="py-2 px-4 m-4 col-span-3 text-sm bg-red-600 rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
