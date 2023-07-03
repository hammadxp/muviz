import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchItemDetails(itemId, itemType) {
  return useQuery(
    ["item-details", itemId],
    () =>
      axios
        .get(`https://api.themoviedb.org/3/${itemType === "show" ? "tv" : "movie"}/${itemId}`, { headers: { Authorization: `Bearer ${apiKey}` } })
        .then((res) => res.data),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
}
