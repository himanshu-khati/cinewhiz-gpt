import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
const GptSearchPage = () => {
  return (
    <section className="gpt-search-page ">
      <div className="container mx-auto left-0 login-background absolute top-0 -z-50">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </section>
  );
};

export default GptSearchPage;
