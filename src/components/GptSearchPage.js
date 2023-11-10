import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <section className="search-page  ">
      <div className=" conatiner   ">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </section>
  );
};

export default GptSearchPage;
