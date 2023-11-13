import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesListShowCase = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <section className="movies-list-area  lg:relative xl:-top-36 lg:-top-32  sm:static relative -top-5 ">
      <div className="container  mx-auto  [&>*:first-child]:background-gradient-top-transparent [&>*:not(first-child)]:bg-black/40 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    </section>
  );
};
export default MoviesListShowCase;
