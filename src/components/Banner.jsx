import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";
import { backdropBaseURL } from "../utilites/tmdb";
import { HiOutlinePlay, HiPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

async function fetchApi() {
  return axios.get("https://api.themoviedb.org/3/trending/all/day", { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
}

export default function Banner() {
  const { data } = useQuery("banner", () => fetchApi());
  const results = data?.results;

  if (!results) return;

  return (
    <div className="flex w-full gap-6" id="banner">
      <div className="h-96 w-2/3">
        <Link to={results?.[0].id.toString()}>
          <div
            className="relative h-full rounded-xl bg-cover bg-center bg-no-repeat transition hover:scale-[.99]"
            style={{
              backgroundImage: `url(${backdropBaseURL + results?.[0].backdrop_path})`,
            }}
          >
            <div className="absolute bottom-0 left-0 flex max-w-lg flex-col gap-4 p-12">
              <p>{results?.[0].overview}</p>

              <div className="flex gap-[12px]">
                <button className="flex items-center gap-2 rounded-md bg-slate-50 py-[6px] pl-6 pr-7 text-slate-900">
                  <HiOutlinePlay />
                  Play
                </button>
                <button className="flex items-center gap-2 rounded-md bg-slate-50 py-[6px] pl-6 pr-7 text-slate-900">
                  <HiPlus />
                  My list
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex h-96 w-1/3 flex-col gap-6">
        <Link
          to={results?.[1].id.toString()}
          className="h-[calc(50%-12px)] w-full overflow-hidden rounded-xl shadow-2xl transition hover:scale-[.99]"
        >
          <img src={backdropBaseURL + results?.[1].backdrop_path} alt={results?.[0].name + "backdrop"} className=" object-cover " />
        </Link>
        <Link
          to={results?.[2].id.toString()}
          className="h-[calc(50%-12px)] w-full overflow-hidden rounded-xl shadow-2xl transition hover:scale-[.99]"
        >
          <img src={backdropBaseURL + results?.[2].backdrop_path} alt={results?.[0].name + "backdrop"} className="object-cover " />
        </Link>
      </div>
    </div>
  );
}
