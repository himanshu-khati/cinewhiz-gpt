import { API_OPTIONS } from "../../utils/constants";
const useSearchMovieTmdb = async (movie) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await response.json();
  return json.results;
};
export default useSearchMovieTmdb;
