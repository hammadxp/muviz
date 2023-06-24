import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";
import { tmdb } from "../utilites/tmdb";

async function fetcher(endpoint, id) {
  return axios.get(`${endpoint}/${id}`, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
}

async function fetchList(endpoint) {
  return axios.get(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
}

// export function useGetMovieDetails(movieId) {
//   return useQuery(["movie-details", movieId], () => fetcher("https://api.themoviedb.org/3/movie", movieId));
// }

// export function useGetShowDetails(showId) {
//   return useQuery(["show-details", showId], () => fetcher("https://api.themoviedb.org/3/tv", showId));
// }

export function useFetchDiscoverMovies() {
  return useQuery("discover-movies-list", () => fetchList(tmdb.discover_movies));
}
