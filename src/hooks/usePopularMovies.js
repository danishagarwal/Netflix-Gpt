import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addPopular } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popular = useSelector((store) => store.popular);
  //Getting movie data from TMDB
  useEffect(() => {
    !popular && getMovieData();
  }, []);

  async function getMovieData() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_options
    );
    const response = await data.json();
    //console.log(response.results);
    dispatch(addPopular(response.results));
  }
};

export default usePopularMovies;
