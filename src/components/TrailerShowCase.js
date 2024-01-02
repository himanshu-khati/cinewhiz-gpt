import { useSelector } from "react-redux";
import Trailer from "./Trailer";
import TrailerInfo from "./TrailerInfo";
import TrailerPosterMobileView from "./TrailerPosterMobileView";
const TrailerShowCase = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  return (
    <section className="trailer-showcase ">
      <div className="container mx-auto  ">
        <div className="w-full relative">
          <Trailer movieId={id} />
          <TrailerInfo title={title} overview={overview} movieId={id} />
        </div>

        <div className="w-full sm:hidden">
          <TrailerPosterMobileView movieData={mainMovie} movieId={id} />
        </div>
      </div>
    </section>
  );
};
export default TrailerShowCase;
