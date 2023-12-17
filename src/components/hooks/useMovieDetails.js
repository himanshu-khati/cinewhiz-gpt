import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";
const useMovieDetails = (movieId) => {
  const [movieData, setMovieData] = useState(null);
  const fetchMovieDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();
    setMovieData(json);
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);
  return movieData;
};

export default useMovieDetails;
