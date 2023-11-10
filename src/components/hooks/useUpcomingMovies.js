import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)
  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
   !upcomingMovies && getUpcomingMovies();
  }, []);
};
export default useUpComingMovies;
