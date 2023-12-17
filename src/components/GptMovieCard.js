import { POSTER_IMAGE } from "../utils/constants";
import { Link } from "react-router-dom";
const GptMovieCard = ({ movieData }) => {
  const { poster_path, title } = movieData;
  if (!poster_path) return;
  return (
    <div className="xl:w-3/12 xl:my-6 lg:w-4/12 lg:my-6 md:w-4/12 sm:w-4/12 w-6/12 my-4 sm:my-6  flex items-center justify-center ">
       <Link to={"/movie/" + movieData.id}>
      <div className=" lg:w-56 md:w-48 sm:w-48 w-48 mx-1.5 ">
        <img
          src={`${POSTER_IMAGE}${poster_path}`}
          alt=""
          className=" w-full lg:h-80 md:h-72 sm:h-72 h-56 object-cover border-4 border-gray-300 "
        />
        <p className="text-gray-300 mt-1 md:mt-2  sm:text-sm  text-xs ">
          {title.substr(0, 25)}
        </p>
      </div>
      </Link>
    </div>
  );
};
export default GptMovieCard;
