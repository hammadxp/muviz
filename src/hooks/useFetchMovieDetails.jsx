import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchMovieDetails(movieId) {
  return useQuery(
    ["movie-details", movieId],
    () => axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
}
