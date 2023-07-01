import { Link } from "react-router-dom";
import { posterBaseURL } from "../utilites/tmdb";

export default function RowItem({ item, rowType }) {
  return (
    <Link to={rowType + "/" + item.id.toString()} className="flex h-fit w-36 flex-none flex-col gap-4">
      <img src={posterBaseURL + item.poster_path} alt={item.title + "poster"} className="rounded-md shadow-lg transition hover:scale-[.97]" />
      <h2 className="line-clamp-3 text-base leading-tight">{rowType === "movie" ? item.title : item.name}</h2>
    </Link>
  );
}
