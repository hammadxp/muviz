import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchBanner() {
  return useQuery(
    ["banner", "trending"],
    () => axios.get("https://api.themoviedb.org/3/trending/all/day", { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
}
