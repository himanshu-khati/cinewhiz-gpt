import { POSTER_IMAGE } from "../utils/constants";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { useParams } from "react-router-dom";
import useMovieDetails from "./hooks/useMovieDetails";
import ShimmerMovieInfo from "./ShimmerMovieInfo";
const MovieInfo = () => {
  const { movieId } = useParams();
  const data = useMovieDetails(movieId);
  const trailerVideo = useMovieTrailer(movieId);
  if (!trailerVideo) return <ShimmerMovieInfo />;
  if (!data) return <ShimmerMovieInfo />;
  const {
    overview,
    poster_path,
    release_date,
    runtime,
    title,
    vote_average,
    vote_count,
  } = data;

  const [...genres] = data.genres;

  return (
    <div
      className=" bg-contain  "
      style={{ backgroundImage: `url(${POSTER_IMAGE}${poster_path})` }}
    >
      <div className="backdrop-blur-xl  bg-black/60  w-full relative top-10 px-0 pt-7 pb-10  md:px-8 md:pt-10 md:pb-14 text-gray-200 ">
        <div className="w-full bg-black/50  flex flex-col lg:flex-row justify-between p-4  ">
          <div>
            <p className=" text-2xl lg:text-4xl font-bold ">{title}</p>
            <p className="text-base font-semibold ">
              {release_date.substr(0, 4)} &#183; {Math.floor(runtime / 60)} hr{" "}
              {runtime % 60} min
            </p>
          </div>
          <div className="my-3 flex  items-center gap-2 ">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png"
              alt=""
              className="h-10 "
            />
            <p className=" text-lg lg:text-xl font-bold">
              {vote_average.toString().substr(0, 3)}/10
              <span className="block text-xs font-medium text-gray-400">
                {vote_count / 100}K
              </span>
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:p-6 lg:flex-row  bg-black/50 ">
          <div className="lg:w-5/12 w-full flex justify-center">
            <img
              src={POSTER_IMAGE + poster_path}
              alt=""
              className="w-[320px] h-[450px] border-4"
            />
          </div>
          <div className="lg:w-7/12 w-full lg:mt-0 mt-12  flex justify-center items-center">
            <iframe
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?modestbranding=0&autohide=1&showinfo=0&controls=1&mute=1&autoplay=1&rel=0&playlist=${trailerVideo?.key}&loop=0&iv_load_policy=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className=" w-full h-[300px] md:h-[414px]  lg:border-4  aspect-video   "
            ></iframe>
          </div>
        </div>

        <div className="flex bg-black/50 flex-col px-4 pt-4 pb-10 lg:pb-6 text-gray-200 justify-center">
          <div className="my-3">
            {genres.map((data) => (
              <button
                key={data.id}
                className="border my-1 me-2 py-1 px-3 rounded-2xl cursor-default"
              >
                {data.name}
              </button>
            ))}
          </div>
          <p className="text-xl font-bold">Plot Summary</p>
          <p className=" text-base md:text-lg lg:text-lg">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
