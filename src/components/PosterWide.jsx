import { Link } from "react-router-dom";
import { posterBaseURL, profileBaseURL, backdropBaseURL } from "../utilites/tmdb";

export default function PosterWide({ item, itemType }) {
  const title = (itemType === "movie" && item.title) || (itemType === "show" && item.name) || (itemType === "people" && item.name);
  const poster =
    (itemType === "movie" && item.backdrop_path && backdropBaseURL + item.backdrop_path) ||
    (itemType === "show" && item.backdrop_path && backdropBaseURL + item.backdrop_path) ||
    (itemType === "people" && item.profile_path && profileBaseURL + item.profile_path);

  return (
    <Link to={"/" + itemType + "/" + item.id.toString()} className="block h-fit transition hover:scale-[.98]">
      <div className="flex h-40 w-72 items-center justify-center overflow-hidden rounded-md shadow-lg">
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
