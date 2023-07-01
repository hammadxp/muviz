import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchSimilarItems(itemId, itemType) {
  return useQuery(
    ["similar-items", itemId],
    () =>
      axios
        .get(`https://api.themoviedb.org/3/${itemType}/${itemId}/similar`, { headers: { Authorization: `Bearer ${apiKey}` } })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
}
