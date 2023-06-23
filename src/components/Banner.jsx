import axios from "axios";
import { useQuery } from "react-query";
import { apiKey } from "../utilites/auth";
import { backdropBaseURL } from "../utilites/tmdb";
import { HiOutlinePlay, HiPlus } from "react-icons/hi2";

async function fetchApi() {
  return axios.get("https://api.themoviedb.org/3/trending/all/day", { headers: { Authorization: `Bearer ${apiKey}` } }).then((res) => res.data);
}

export default function Banner() {
  const { data } = useQuery("banner", () => fetchApi());
  const results = data?.results;

  return (
    <div className="flex w-full gap-6" id="banner">
      <div className="h-96 w-2/3">
        <div
          className={`bg-[linear-gradient(to_top,rgba(0,0,0,0.3),rgba(0,0,0,0)),url('${
            backdropBaseURL + results?.[0].backdrop_path
          }')] relative h-full rounded-xl bg-cover bg-center bg-no-repeat transition hover:scale-[.99]`}
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
      </div>
      <div className="flex h-96 w-1/3 flex-col gap-6">
        <img
          src={backdropBaseURL + results?.[1].backdrop_path}
          alt={results?.[0].name + "backdrop"}
          className="h-[calc(50%-12px)] w-full rounded-xl object-cover shadow-2xl transition hover:scale-[.99]"
        />
        <img
          src={backdropBaseURL + results?.[2].backdrop_path}
          alt={results?.[0].name + "backdrop"}
          className="h-[calc(50%-12px)] w-full rounded-xl object-cover shadow-2xl transition hover:scale-[.99]"
        />
      </div>
    </div>
  );
}
