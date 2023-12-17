import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useMovieTrailer = (movieId) => {
  const [trailerInfo, setTrailerInfo] = useState(null);
  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();
    const filteredData = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    setTrailerInfo(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return trailerInfo;
};
export default useMovieTrailer;
