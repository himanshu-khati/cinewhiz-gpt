import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="w-full flex flex-col  text-white">
      <h1 className="m-4 text-2xl  ">{title}</h1>
      <div className="card flex overflow-x-hidden bg-[#00000072] ">
        {movies.map((data) => (
          <MovieCard key={data.id} movieData={data} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
