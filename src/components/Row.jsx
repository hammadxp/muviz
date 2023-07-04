import { Link } from "react-router-dom";
import { useFetchList } from "../hooks/useFetchList";
import PosterTall from "./PosterTall";

export default function Row({ endpoint, id, title, rowType }) {
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
      <div className="flex py-6">
        <h2 className="ml-2 text-xl font-bold uppercase">{title}</h2>
        <Link to={id} className="ml-auto uppercase transition hover:opacity-90">
          View all
        </Link>
      </div>

      {/* Row items area */}
      <div className="max-w-8xl flex gap-4 overflow-x-scroll p-1 [&::-webkit-scrollbar]:hidden">
        {data?.results.map((item) => {
          if (rowType === "movie" || rowType === "show" || rowType === "people") {
            return <PosterTall key={item.id} item={item} itemType={rowType} />;
          } else if (rowType === "mixed") {
            return <PosterTall key={item.id} item={item} itemType={item.media_type === "tv" ? "show" : item.media_type} />;
          }
        })}
      </div>
    </div>
  );
}
