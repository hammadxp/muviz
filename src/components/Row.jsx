import { useQuery } from "react-query";
import axios from "axios";
import { apiKey } from "../utilites/auth";
import RowItem from "./RowItem";
import { Link } from "react-router-dom";

async function fetchApi(url) {
  return axios.get(url, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
}

export default function Row({ url, title, titleShort }) {
  const { isLoading, data } = useQuery(url, () => fetchApi(url), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const results = data?.results;

  return (
    <div className="flex flex-col">
      {/* Row title area */}
      <div className="flex py-6">
        <h2 className="ml-2 text-xl font-bold uppercase">{title}</h2>
        <Link to={titleShort} className="ml-auto uppercase transition hover:opacity-90">
          View all
        </Link>
      </div>

      {/* Row items area */}
      <div className="max-w-8xl flex gap-4 overflow-x-scroll p-1 [&::-webkit-scrollbar]:hidden">
        {results.map((item) => {
          return <RowItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
