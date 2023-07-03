import { Link } from "react-router-dom";
import { posterBaseURL, profileBaseURL } from "../utilites/tmdb";

export default function RowItem({ item, type }) {
  const title = (type === "movie" && item.title) || (type === "show" && item.name) || (type === "people" && item.name);
  const poster =
    (type === "movie" && item.poster_path && posterBaseURL + item.poster_path) ||
    (type === "show" && item.poster_path && posterBaseURL + item.poster_path) ||
    (type === "people" && item.profile_path && profileBaseURL + item.profile_path);

  return (
    <Link to={type + "/" + item.id.toString()} className="block h-fit transition hover:scale-[.98]">
      <div className="flex h-52 w-36 items-center justify-center overflow-hidden rounded-md shadow-lg">
        {poster ? <img src={poster} alt={title + "poster"} loading="lazy" /> : <span className="text-7xl font-bold">!</span>}
      </div>
      <h2 className="line-clamp-3 py-4 text-base leading-tight">{title}</h2>
    </Link>
  );
}
