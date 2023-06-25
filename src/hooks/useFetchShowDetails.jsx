import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchShowDetails(showId) {
  return useQuery(["show-details", showId], () =>
    axios.get(`https://api.themoviedb.org/3/tv/${showId}`, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data)
  );
}
