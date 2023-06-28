import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchSimilarMovies(movieId) {
  return useQuery(
    ["similar-movies", movieId],
    () =>
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
}
