import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchItemVideos(itemId, itemType) {
  return useQuery(
    ["item-videos", itemId],
    () =>
      axios
        .get(`https://api.themoviedb.org/3/${itemType === "show" ? "tv" : "movie"}/${itemId}/videos`, {
          headers: { Authorization: `Bearer ${apiKey}` },
        })
        .then((res) => res.data),
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
}
