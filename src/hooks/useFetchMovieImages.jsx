import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchMovieImages(movieId) {
  return useQuery(
    ["movie-images", movieId],
    () =>
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images`, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
}
