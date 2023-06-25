import { Link } from "react-router-dom";
import { profileBaseURL } from "../utilites/tmdb";

export default function RowItemPeople({ item, type }) {
  return (
    <Link to={type + "/" + item.id.toString()} className="flex  w-36 flex-none flex-col gap-4">
      {item.profile_path ? (
        <img
          src={profileBaseURL + item.profile_path}
          alt={item.title + "poster"}
          className="rounded-md shadow-lg outline-none transition hover:scale-[.97]"
        />
      ) : (
        <div className="grid h-full w-full place-items-center rounded-md bg-slate-800 text-7xl font-bold shadow-lg outline-none transition hover:scale-[.97]">
          !
        </div>
      )}

      <h2 className="line-clamp-3 text-base leading-tight">{type === "movie" ? item.title : item.name}</h2>
    </Link>
  );
}
