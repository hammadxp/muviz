import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchItemEpisodes(itemId, seasonNumber) {
  return useQuery(
    ["item-episodes", itemId],
    () =>
      axios
        .get(`https://api.themoviedb.org/3/tv/${itemId}/season/${seasonNumber}`, {
          headers: { Authorization: `Bearer ${apiKey}` },
        })
        .then((res) => res.data),
    {
      enabled: !!seasonNumber,
      refetchOnWindowFocus: false,
    }
  );
}
