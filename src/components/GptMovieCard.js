import { POSTER_IMAGE } from "../utils/constants";
const GptMovieCard = ({ movieData }) => {
  const { poster_path } = movieData;
  if (!poster_path) return;
  return (
    <div className="xl:w-3/12 xl:my-6 lg:w-4/12 lg:my-6 md:w-4/12 sm:w-4/12 w-6/12 my-4 sm:my-6  flex items-center justify-center ">
      <div className="xl:w-56 lg:w-56 md:w-48 sm:w-48 w-48 mx-1.5 ">
        <img
          src={`${POSTER_IMAGE}${poster_path}`}
          alt=""
          className=" w-full lg:h-80 md:h-72 sm:h-72 h-56 object-cover border-4 border-gray-300 "
        />
      </div>
    </div>
  );
};
export default GptMovieCard;
