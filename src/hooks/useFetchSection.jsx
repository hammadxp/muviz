import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";

export function useFetchSection(endpoint, id) {
  return useQuery(["expanded", id], () => axios.get(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data), {
    refetchOnWindowFocus: false,
  });
}
