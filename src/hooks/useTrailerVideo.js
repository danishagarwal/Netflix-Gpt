import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addtrailerId } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideo();
  }, []);

  //Getting the small videos from the API
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US';",
      API_options
    );
    const response = await data.json();
    //console.log(response.results);

    //Getting the Trailer
    const filterData = response.results.filter(
      (type) => type.type === "Trailer"
    );
    const trailer = filterData[0];
    //console.log(trailer);
    dispatch(addtrailerId(trailer));
  };
};

export default useTrailerVideo;
