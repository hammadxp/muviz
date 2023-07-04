import { Link } from "react-router-dom";
import { posterBaseURL, profileBaseURL } from "../utilites/tmdb";

export default function PosterTall({ item, itemType }) {
  const title = (itemType === "movie" && item.title) || (itemType === "show" && item.name) || (itemType === "people" && item.name);
  const poster =
    (itemType === "movie" && item.poster_path && posterBaseURL + item.poster_path) ||
    (itemType === "show" && item.poster_path && posterBaseURL + item.poster_path) ||
    (itemType === "people" && item.profile_path && profileBaseURL + item.profile_path);

  return (
    <Link to={itemType + "/" + item.id.toString()} className="block h-fit transition hover:scale-[.98]">
      <div className="flex h-52 w-36 items-center justify-center overflow-hidden rounded-md shadow-lg">
        {poster ? (
          <img src={poster} alt={title + "poster"} loading="lazy" className="h-full w-full object-cover object-center" />
        ) : (
          <span className="text-7xl font-bold">!</span>
        )}
      </div>
      <p className="line-clamp-3 py-4 text-base leading-tight">{title}</p>
    </Link>
  );
}
