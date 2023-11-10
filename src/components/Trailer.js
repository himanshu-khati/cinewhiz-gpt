import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
const Trailer = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="trailer  border-8 border-yellow-600 ">
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?modestbranding=0&autohide=1&showinfo=0&controls=0&mute=1&autoplay=1&rel=0&playlist=${trailerVideo?.key}&loop=0&iv_load_policy=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className=" w-full aspect-video -mt-10 md:-mt-0 sm:-mt-0 xs:-mt-0   "
      ></iframe>
      <div className="w-full border-2 border-green-800 aspect-video   absolute top-0  "></div>
    </div>
  );
};

export default Trailer;
