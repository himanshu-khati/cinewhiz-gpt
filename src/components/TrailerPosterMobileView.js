import React from "react";
import { POSTER_IMAGE } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const TrailerPosterMobileView = ({ movieData, movieId }) => {
  const { poster_path } = movieData;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie/" + movieId);
  };

  return (
    <div
      style={{ backgroundImage: `url(${POSTER_IMAGE}${poster_path})` }}
      className=" bg-cover w-full pb-5  "
    >
      <div className="w-full backdrop-blur-lg bg-black/20 flex flex-col justify-center items-center relative">
        <img
          src={`${POSTER_IMAGE}${poster_path}`}
          alt=""
          className="w-11/12 mt-16  border border-gray-600 rounded-xl object-contain"
        />
        <div className="buttons flex absolute bottom-0 justify-center items-center w-full  my-3  gap-2 ">
          <button
            className=" bg-gray-200 bg-opacity-100 hover:bg-opacity-90  text-gray-950 w-4/12 text-sm px-2 py-1 rounded border border-gray-200 "
            onClick={handleClick}
          >
            Play
          </button>
          <button
            className=" bg-gray-200 bg-opacity-5 hover:bg-opacity-20 border border-gray-200 text-gray-300  text-sm px-2 py-1 rounded  w-4/12"
            onClick={handleClick}
          >
            <span className=""> &#9432; </span>
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerPosterMobileView;
