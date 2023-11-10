import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesListShowCase = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <section className="movies-list-area relative -top-36 border-4 border-dashed border-purple-950">
      <div className="container border-4 border-yellow-700 mx-auto  [&>*:first-child]:background-gradient-top-transparent [&>*:not(first-child)]:bg-black ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    </section>
  );
};
export default MoviesListShowCase;
