import React from "react";
import { POSTER_IMAGE } from "../utils/constants";
const MovieCard = ({ movieData }) => {
  const { poster_path } = movieData;
  return (
    <div className="w-2/12 bg-black  flex items-center justify-center   ">
      <div className="w-44 mx-0.5">
        <img
          src={`${POSTER_IMAGE}${poster_path}`}
          alt=""
          className="rounded-lg "
        />
      </div>
    </div>
  );
};

export default MovieCard;
