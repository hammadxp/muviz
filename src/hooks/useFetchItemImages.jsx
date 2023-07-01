import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchItemImages(itemId, itemType) {
  return useQuery(
    ["item-images", itemId],
    () =>
      axios
        .get(`https://api.themoviedb.org/3/${itemType === "show" ? "tv" : "movie"}/${itemId}/images`, {
          headers: { Authorization: `Bearer ${apiKey}` },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
}
