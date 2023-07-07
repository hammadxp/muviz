import { Link } from "react-router-dom";
import { useFetchList } from "../hooks/useFetchList";
import PosterTall from "./PosterTall";
import PosterWide from "./PosterWide";

export default function Row({ endpoint, id, title, rowType, posterWide }) {
  const { isLoading, isError, error, data } = useFetchList(endpoint, id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-2 flex flex-col 600px:mt-0">
      {/* Row title area */}
      <div className="flex items-center pb-4 pt-2">
        <h2 className="ml-2 text-xl font-bold uppercase">{title}</h2>
        <Link to={id} className="ml-auto rounded-md border-2 border-slate-800 bg-slate-800 px-4 py-1 transition hover:bg-transparent 600px:px-3">
          View all
        </Link>
      </div>

      {/* Row items area */}
      <div className="max-w-8xl flex gap-4 overflow-x-scroll p-1 [&::-webkit-scrollbar]:hidden">
        {data?.results.map((item) => {
          if (rowType === "movie" || rowType === "show" || rowType === "people") {
            if (posterWide) {
              return <PosterWide key={item.id} item={item} itemType={rowType} posterWide />;
            } else {
              return <PosterTall key={item.id} item={item} itemType={rowType} />;
            }
          } else if (rowType === "mixed") {
            if (posterWide) {
              return <PosterWide key={item.id} item={item} itemType={item.media_type === "tv" ? "show" : item.media_type} />;
            } else {
              return <PosterTall key={item.id} item={item} itemType={item.media_type === "tv" ? "show" : item.media_type} />;
            }
          }
        })}
      </div>
    </div>
  );
}
