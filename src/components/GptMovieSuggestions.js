import React from "react";
import { useSelector } from "react-redux";
import GptMovieCard from "./GptMovieCard";
import ShimmerUi from "./ShimmerUi";
const GptMovieSuggestions = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const shimmerStatus = useSelector((store) => store.gpt.showShimmer);
  const { gptMovieNames, gptMovieResults } = useSelector((store) => store.gpt);

  if ((!gptMovieNames || !gptMovieResults) && !shimmerStatus)
    return (
      <div className="default-movies login-background bg-contain bg-center bg-repeat">
        <div className="container sm:p-10 py-10 px-4 backdrop-blur-lg bg-black/80 ">
          <p className="text-gray-300 font-semibold text-lg">
            CineWhiz Suggestions
          </p>
          <div className="w-full flex flex-wrap justify-center">
            {nowPlayingMovies.map((movie) => {
              return <GptMovieCard key={movie.id} movieData={movie} />;
            })}
          </div>
        </div>
      </div>
    );
  if (shimmerStatus) {
    return <ShimmerUi />;
  }
  if (gptMovieResults.length)
    return (
      <div className="gpt-movie-suggestions login-background bg-contain bg-center bg-repeat ">
        <div className="container md:p-10 py-10 px-4 backdrop-blur-lg bg-black/80 ">
          <p className="text-gray-300 font-semibold text-lg">
            Your movie recommendations
          </p>
          <div className="w-full flex flex-wrap justify-center">
            {gptMovieResults.map((data) =>
              data.map((movie) => (
                <GptMovieCard key={movie.id} movieData={movie} />
              ))
            )}
          </div>
        </div>
      </div>
    );
};

export default GptMovieSuggestions;
