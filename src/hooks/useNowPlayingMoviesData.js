import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addNowPlaying } from "../utils/moviesSlice";

const useNowPlayingMoviesData = () => {
  const dispatch = useDispatch();

  //Getting movie data from TMDB
  useEffect(() => {
    getMovieData();
  }, []);

  async function getMovieData() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const response = await data.json();
    console.log(response.results);
    dispatch(addNowPlaying(response.results));
  }
};

export default useNowPlayingMoviesData;
