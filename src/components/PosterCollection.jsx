import { Link } from "react-router-dom";
import { backdropBaseURL } from "../utilites/tmdb";

export default function PosterCollection({ title, posterId, collectionId }) {
  const poster = backdropBaseURL + posterId;

  return (
    <Link to={"/collection/" + collectionId.toString()} className="block h-fit transition hover:scale-[.98]">
      <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-md shadow-lg 600px:h-40">
        {poster ? (
          <img src={poster} alt={title + "backdrop"} loading="lazy" className="h-full w-full object-cover object-center" />
        ) : (
          <span className="text-7xl font-bold">!</span>
        )}
      </div>
      <p className="line-clamp-3 py-4 text-base leading-tight">{title}</p>
    </Link>
  );
}
