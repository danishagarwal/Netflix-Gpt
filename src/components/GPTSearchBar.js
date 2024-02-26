import React, { useRef } from "react";
import { API_options, background_img } from "../utils/constants";
import lang from "../utils/language";
import { useSelector } from "react-redux";
import { gptApiKey } from "../utils/apiKey";
const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  //Searching movie from Tmdb API
  const searchMovie = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    const response = await fetch(url, API_options);
    const data = await response.json();
    //console.log(data);

    return data.results[0];
  };

  //Getting AI generated results
  const handleClick = async (e) => {
    e.preventDefault();
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(gptApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      "Act as a Movie recommendation system and suggest " +
      searchText.current.value +
      ". Give only 10 of them and give only the title with comma separation. For Example - Sholay, Batman, Dark, Dune, Hero. Dont give numbering, just mention them with comma separation";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    const moviesArray = text.split(",");

    const promiseMap = moviesArray.map((movie) => searchMovie(movie));
    console.log(promiseMap);

    const movieData = await Promise.all(promiseMap);
    console.log(movieData);
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form className="mx-2 w-1/2 grid grid-cols-12 bg-black">
        <input
          ref={searchText}
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
