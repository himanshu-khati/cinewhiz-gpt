import React, { useRef } from "react";
import LANGUAGE_CONSTANTS from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import useSearchMovieTmdb from "./hooks/useSearchMovieTmdb";
import useGptSearch from "./hooks/useGptSearch";
import { toggleShimmerUi } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.language);
  const searchMovieTmdb = useSearchMovieTmdb;
  const gptSearch = useGptSearch;

  const handleGptSearchClick = async () => {
    dispatch(toggleShimmerUi({ shimmer: true }));
    const gptMovies = await gptSearch(searchText.current.value);
    console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    if (tmdbResults) {
      dispatch(toggleShimmerUi({ shimmer: false }));
    }
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="search-area login-background  justify-center items-center bg-cover bg-center ">
      <div className="w-full py-28 flex flex-col border-b border-gray-700  justify-center items-center backdrop-blur-lg bg-black/80">
        <div className="text-area text-center  text-white mb-5">
          <h1 className="font-semibold text-cinewhiz text-4xl my-2">
            CineWhiz AI
          </h1>
          <p className="text-gray-300 text-lg">
            {LANGUAGE_CONSTANTS[languageKey].tagLine}
          </p>
        </div>

        <form
          className="inline-flex max-w-lg w-full xs:max-w-md xs:px-5 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            ref={searchText}
            placeholder={LANGUAGE_CONSTANTS[languageKey].gptSearchPlaceholder}
            className="focus:outline-none px-2 sm:text-base text-sm sm:px-5 sm:py-3 max-w-sm w-full bg-white rounded-l"
          />
          <button
            className="text-white bg-cinewhiz  px-10 py-3 rounded-r "
            onClick={handleGptSearchClick}
          >
            {LANGUAGE_CONSTANTS[languageKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
