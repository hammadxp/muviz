import { useQuery } from "react-query";
import axios from "axios";
import { apiKey } from "../utilites/auth";

function fetchApi(url) {
  console.log("something");
  return axios.get(url, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
}

export default function Temp({ url, title, titleShort }) {
  const { data } = useQuery("just", () => fetchApi(url));

  const results = data?.results;

  console.log("data: ", data);
  console.log("results: ", results);

  return <></>;
}
