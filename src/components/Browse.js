import Header from "./Header";
import TrailerShowCase from "./TrailerShowCase";
import MoviesListShowCase from "./MoviesListShowCase";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useUpComingMovies from "./hooks/useUpcomingMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();
  return (
    <>
      <Header />
      <TrailerShowCase />
      <MoviesListShowCase />
    </>
  );
};

export default Browse;
