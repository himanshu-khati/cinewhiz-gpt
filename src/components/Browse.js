import Header from "./Header";
import Footer from "./Footer";
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
    <div className="container mx-auto  login-background  bg-contain  ">
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <div className="backdrop-blur-lg bg-black/80 ">
          <TrailerShowCase />
          <MoviesListShowCase />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Browse;
