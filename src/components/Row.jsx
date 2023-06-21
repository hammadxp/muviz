import { useQuery } from "react-query";
import axios from "axios";
import { apiKey } from "../utilites/auth";
import RowItem from "./RowItem";

async function fetchApi(url) {
  return axios.get(url, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
}

export default function Row({ url }) {
  const { isLoading, data } = useQuery(url, () => fetchApi(url));
  const results = data?.results;

  console.log(results);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex w-screen gap-4 overflow-x-scroll">
      {results.map((item) => {
        return <RowItem key={item.id} item={item} />;
      })}
    </div>
  );
}
