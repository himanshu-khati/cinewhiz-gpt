import React from "react";
import { POSTER_IMAGE } from "../utils/constants";
const MovieCard = ({ movieData }) => {
  const { poster_path } = movieData;
  if (!poster_path) return;
  return (
    <div className="w-2/12  flex items-center justify-center  ">
      <div className="w-56 mx-1">
        <img
          src={`${POSTER_IMAGE}${poster_path}`}
          alt=""
          className=" w-full h-80  object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default MovieCard;
