import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="w-full flex flex-col text-gray-200  ">
      <h1 className=" xl:m-8 lg:m-7 md:m-6 md:text-2xl font-semibold sm:text-xl text-lg mt-6 mb-3 mx-4  ">
        {title}
      </h1>
      <div className="card w-full flex overflow-x-scroll hide-scroll  ">
        {movies.map((data) => (
          <MovieCard key={data.id} movieData={data} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
