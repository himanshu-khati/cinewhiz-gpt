import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
const Trailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const data = useMovieTrailer(movieId);
  useEffect(() => {
    dispatch(addTrailerVideo(data));
  }, [data, dispatch]);
  return (
    <div className="trailer sm:block hidden ">
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?modestbranding=0&autohide=1&showinfo=0&controls=0&mute=1&autoplay=1&rel=0&playlist=${trailerVideo?.key}&loop=0&iv_load_policy=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className=" w-full  md:-mt-10 sm:-mt-7 mt-8 aspect-video    "
      ></iframe>
      <div className="w-full aspect-video md:-mt-10 sm:-mt-7 mt-8   absolute top-0  "></div>
    </div>
  );
};

export default Trailer;
