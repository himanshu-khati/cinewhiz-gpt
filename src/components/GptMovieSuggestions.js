import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useSelector((store) => store.gpt);
  if (!gptMovieNames || !gptMovieResults) return null;
  if (gptMovieResults.length)
    return (
      <section className="gpt-movie-suggestions  text-white border-4 border-red-800">
        <div className="container  mx-auto">
          <div className="w-full flex justify-center  flex-wrap bg-black bg-opacity-75 p-20 gap-2 border-2">
            {gptMovieResults.map((data) =>
              data.map((movie) => (
                <MovieCard key={movie.id} movieData={movie} />
              ))
            )}
          </div>
        </div>
      </section>
    );
};

export default GptMovieSuggestions;
