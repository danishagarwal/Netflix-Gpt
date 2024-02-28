import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const Videobackground = ({ movieId }) => {
  //Custom hook for getting the trailer video
  useTrailerVideo(movieId);

  //Getting the key from our store
  const trailerKey = useSelector(
    (redux_store) => redux_store.movies?.trailerId?.key
  );

  return (
    <div className="hidden md:block w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey +
          "?autoplay=1&mute=0&loop=1&controls=0&showinfo=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
