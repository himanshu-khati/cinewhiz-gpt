import React from "react";
import { POSTER_IMAGE } from "../utils/constants";
import { Link } from "react-router-dom";
const MovieCard = ({ movieData }) => {
  const { poster_path } = movieData;
  if (!poster_path) return;
  return (
    <div className=" lg:w-3/12 md:w-3/12 sm:w-3/12 w-4/12 flex items-center justify-center  ">
      <Link to={"/movie/" + movieData.id}>
        <div className="xl:w-56 lg:w-48 md:w-48 sm:w-48 w-48   mx-1">
          <img
            src={`${POSTER_IMAGE}${poster_path}`}
            alt=""
            className=" w-full xl:h-80 lg:h-72 md:h-72 sm:h-56 h-40   object-cover rounded-lg  "
          />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
