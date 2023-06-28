import { Link } from "react-router-dom";
import { backdropBaseURL } from "../utilites/tmdb";
import { HiPlay, HiPlus, HiUserGroup } from "react-icons/hi2";
import calculateRuntime from "../utilites/calculateRuntime";
import trimYear from "../utilites/trimYear";

export default function ItemDetails({ item, images, similarMovies, type }) {
  return (
    <div className="bg-slate-900 text-white">
      <div
        className="h-[36rem] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backdropBaseURL + item.backdrop_path})`,
        }}
      >
        <div
          className="h-full w-full"
          style={{ background: "radial-gradient(farthest-corner at top right, rgba(15,23,42,0), rgba(15,23,42,0.4), rgba(15,23,42,1))" }}
        >
          <div className="mx-auto max-w-7xl px-4 py-12">
            <img src={backdropBaseURL + images?.logos[0].file_path} alt="" className="w-80 py-8" />

            {/* Release Year & Runtime */}

            <div className="flex gap-1 font-semibold">
              <p>{trimYear(item.release_date)}</p>
              <span>&middot;</span>
              <p>{calculateRuntime(item.runtime)}</p>
            </div>

            {/* Genres */}

            <p className="py-1">
              {item.genres.map((genre, i) => {
                return `${genre.name}${item.genres.length === i + 1 ? "" : ", "}`;
              })}
            </p>

            {/* Buttons */}

            <div className="flex gap-4 py-6">
              <button className="flex items-center gap-2 rounded-md border-2 border-white bg-white px-6 py-3 font-semibold uppercase text-black">
                <HiPlay className={"text-xl"} /> Play
              </button>
              <button className="flex items-center gap-2 rounded-md border-2 border-white bg-slate-900/50 px-6 py-3 font-semibold uppercase">
                Trailer
              </button>
              <button className="rounded-full border-2 border-white bg-slate-900/50 px-2">
                <HiPlus size={"2em"} />
              </button>
              <button className="rounded-full border-2 border-white bg-slate-900/50 px-2">
                <HiUserGroup size={"2em"} />
              </button>
            </div>

            {/* Overview */}

            <p className="max-w-3xl py-4">{item.overview}</p>
          </div>
        </div>
      </div>

      <div>
        <div id="similar">Similar</div>
        <div id="similar">
          <h2>Details</h2>
          {similarMovies?.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <h2>{(type === "movie" && item.title) || (type === "show" && item.name)}</h2>
        <p>{item.tagline}</p>
        <a href={item.homepage} target="_blank" rel="noreferrer">
          Homepage
        </a>
        <a href={`https://www.imdb.com/title/${item.imdb_id}`}>IMDb</a>

        <h3>Collection:</h3>
        <Link to={`/collection/${item.belongs_to_collection?.id}`}>
          <img src={backdropBaseURL + item.belongs_to_collection?.backdrop_path} alt="" className="w-40" />
        </Link>
        <p>{item.belongs_to_collection?.name}</p>
      </div>
    </div>
  );
}
