import { backdropBaseURL } from "../utilites/tmdb";
import { HiOutlinePlay, HiPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useFetchBanner } from "../hooks/useFetchBanner";

export default function Banner() {
  const { isLoading, isError, error, data } = useFetchBanner();
  const results = data?.results;

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="flex w-full gap-6 600px:flex-col" id="banner">
      <div className="h-96 w-2/3 600px:h-72 600px:w-full">
        <Link to={`${results && results[0].media_type}/${results && results[0].id.toString()}`}>
          <div
            className="relative h-full rounded-xl bg-cover bg-center bg-no-repeat transition hover:scale-[.99]"
            style={{
              backgroundImage: `url(${backdropBaseURL + results?.[0].backdrop_path})`,
            }}
          >
            <div className="h-full w-full" style={{ background: "linear-gradient(to top, rgba(15,23,42,1), rgba(15,23,42,0))" }}>
              <div className="absolute bottom-0 left-0 flex max-w-lg flex-col gap-4 p-12 600px:p-8">
                <p>{results?.[0].overview}</p>

                <div className="flex gap-[12px]">
                  <button className="flex items-center gap-2 rounded-md border-2 border-slate-50 bg-slate-50 py-[6px] pl-6 pr-7 text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50">
                    <HiOutlinePlay />
                    Play
                  </button>
                  <button className="flex items-center gap-2 rounded-md border-2 border-slate-50 bg-slate-50 py-[6px] pl-6 pr-7 text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50">
                    <HiPlus />
                    My list
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex h-96 w-1/3 flex-col gap-6 600px:h-fit 600px:w-full 600px:flex-row">
        <Link
          to={`${results && results[1].media_type}/${results && results[1].id.toString()}`}
          className="h-[calc(50%-12px)] w-full overflow-hidden rounded-xl shadow-2xl transition hover:scale-[.99] 600px:h-32"
        >
          <img
            src={backdropBaseURL + results?.[1].backdrop_path}
            alt={results?.[0].name + "backdrop"}
            className="object-cover 600px:h-full 600px:w-full"
          />
        </Link>
        <Link
          to={`${results && results[2].media_type}/${results && results[2].id.toString()}`}
          className="h-[calc(50%-12px)] w-full overflow-hidden rounded-xl shadow-2xl transition hover:scale-[.99] 600px:h-32"
        >
          <img
            src={backdropBaseURL + results?.[2].backdrop_path}
            alt={results?.[0].name + "backdrop"}
            className="object-cover 600px:h-full 600px:w-full"
          />
        </Link>
      </div>
    </div>
  );
}
