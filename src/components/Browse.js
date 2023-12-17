import GptSearchPage from "./GptSearchPage";
import TrailerShowCase from "./TrailerShowCase";
import MoviesListShowCase from "./MoviesListShowCase";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useUpComingMovies from "./hooks/useUpcomingMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <>
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <div className="backdrop-blur-lg bg-black/80 ">
          <TrailerShowCase />
          <MoviesListShowCase />
        </div>
      )}
    </>
  );
};

export default Browse;
