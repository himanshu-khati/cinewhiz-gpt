import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="w-full flex flex-col text-white">
      <h1 className="my-7 mx-7 text-2xl ">{title}</h1>
      <div className="card flex overflow-x-scroll hide-scroll  ">
        {movies.map((data) => (
          <MovieCard key={data.id} movieData={data} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
