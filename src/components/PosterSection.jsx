import { Link } from "react-router-dom";
import { backdropBaseURL, posterBaseURL, profileBaseURL } from "../utilites/tmdb";

export default function PosterSection({ item, sectionType }) {
  const itemType = sectionType === "mixed" ? (item.media_type === "tv" ? "show" : item.media_type) : sectionType;

  const title = (itemType === "movie" && item.title) || (itemType === "show" && item.name) || (itemType === "people" && item.name);
  const backdrop =
    (itemType === "movie" && item.backdrop_path && backdropBaseURL + item.backdrop_path) ||
    (itemType === "show" && item.backdrop_path && backdropBaseURL + item.backdrop_path) ||
    (itemType === "people" && item.profile_path && profileBaseURL + item.profile_path);

  const poster =
    (itemType === "movie" && item.poster_path && posterBaseURL + item.poster_path) ||
    (itemType === "show" && item.poster_path && posterBaseURL + item.poster_path) ||
    (itemType === "people" && item.profile_path && profileBaseURL + item.profile_path);

  return (
    <>
      <Link to={"/" + itemType + "/" + item.id.toString()} className="block h-fit transition hover:scale-[.98]">
        <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-md shadow-lg 600px:h-36">
          {backdrop ? (
            <img src={backdrop} alt={title + "backdrop"} loading="lazy" className="h-full w-full object-cover object-center" />
          ) : poster ? (
            <img src={poster} alt={title + "poster"} loading="lazy" className="h-full w-full object-cover object-center" />
          ) : (
            <span className="text-7xl font-bold">!</span>
          )}
        </div>
        <p className="line-clamp-3 py-4 text-base leading-tight">{title}</p>
      </Link>
    </>
  );
}
