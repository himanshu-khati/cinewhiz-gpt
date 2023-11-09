import React, { useRef } from "react";
import LANGUAGE_CONSTANTS from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import useSearchMovieTmdb from "./hooks/useSearchMovieTmdb";
import useGptSearch from "./hooks/useGptSearch";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.language);
  const searchMovieTmdb = useSearchMovieTmdb;
  const gptSearch = useGptSearch;

  const handleGptSearchClick = async () => {
    const gptMovies = await gptSearch(searchText.current.value);
    console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <section className="gpt-search-bar">
      <div className="container flex justify-center items-center  mx-auto border-2 border-dashed border-green-700 ">
        <div className="w-full py-80 border border-red-700 ">
          <form
            action=""
            className="border w-full inline-flex justify-center items-center "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              ref={searchText}
              placeholder={LANGUAGE_CONSTANTS[languageKey].gptSearchPlaceholder}
              className="input-field bg-white focus:bg-white text-gray-700 rounded-l w-6/12"
            />
            <button
              className="text-white bg-[#e50914]   px-10 py-4 rounded-r "
              onClick={handleGptSearchClick}
            >
              {LANGUAGE_CONSTANTS[languageKey].search}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GptSearchBar;
