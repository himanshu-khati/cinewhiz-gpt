import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
const Trailer = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="trailer w-full absolute left-0 -top-16 sm:-top-28 -z-50 ">
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?modestbranding=0&autohide=1&showinfo=0&controls=0&mute=1&autoplay=1&rel=0&playlist=${trailerVideo?.key}&loop=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-video border-4 border-yellow-400  "
      ></iframe>
      <div className="w-full aspect-video border-4 border-green-700  absolute top-0  "></div>
    </div>
  );
};

export default Trailer;
