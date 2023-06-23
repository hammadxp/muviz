import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";
import RowItem from "./RowItem";
import { Link } from "react-router-dom";

async function fetchApi(url) {
  // console.log(url, apiKey);
  // console.log("fetchApi: ", url, apiKey);
  // console.log("fetchApi: ", apiKey);
  return axios.get(url, { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
  // const res = await fetch(url, { headers: { Authorization: `Bearer ${apiKey}` } });
  // const data = await res.json();
  // return data;
  // return axios.get("https://api.themoviedb.org/3/movie/now_playing", { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
}

export default function Row({ url, title, titleShort }) {
  // const { isLoading, data } = useQuery(url, () => fetchApi(url), {
  // refetchOnMount: false,
  // refetchOnWindowFocus: false,
  // });

  // const data = fetchApi(url);
  // const { data } = useQuery(titleShort, fetchApi);
  // const { data } = useQuery("now playing", fetchApi);
  // const { isLoading, data } = useQuery({ url, fetchApi });
  // fuck useQuery
  // const { data: movies } = useQuery(titleShort, () => fetchApi(url));
  const { data, error } = useQuery(titleShort, () => fetchApi(url));

  const results = data?.results;
  // const results = movies?.results;

  console.log("url: ", url);
  console.log("data: ", data);
  // console.log(url, title, titleShort);
  console.log("error: ", error);

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
