import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesListShowCase = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <section className="movies-list-area">
      <div className="container mx-auto  relative -top-5  [&>*:first-child]:backdrop-blur-3xl    [&>*:not(first-child)]:bg-black ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    </section>
  );
};
export default MoviesListShowCase;
