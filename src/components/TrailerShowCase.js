import { useSelector } from "react-redux";
import Trailer from "./Trailer";
import TrailerInfo from "./TrailerInfo";
const TrailerShowCase = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  return (
    <section className="trailer-showcase">
      <div className="container mx-auto ">
        <div className="row w-full">
          <Trailer movieId={id} />
          <TrailerInfo title={title} overview={overview} />
        </div>
      </div>
    </section>
  );
};
export default TrailerShowCase;
