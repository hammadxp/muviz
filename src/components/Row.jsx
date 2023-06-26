import { Link } from "react-router-dom";
import { useFetchList } from "../hooks/useFetchList";
import RowItem from "./RowItem";
import RowItemPeople from "./RowItemPeople";

export default function Row({ endpoint, id, title, type }) {
  const { isLoading, isError, error, data } = useFetchList(endpoint, id);
  const listItems = data?.results;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-4 flex flex-col">
      {/* Row title area */}
      <div className="flex py-6">
        <h2 className="ml-2 text-xl font-bold uppercase">{title}</h2>
        <Link to={id} className="ml-auto uppercase transition hover:opacity-90">
          View all
        </Link>
      </div>

      {/* Row items area */}
      <div className="max-w-8xl flex gap-4 overflow-x-scroll p-1 [&::-webkit-scrollbar]:hidden">
        {listItems?.map((item) => {
          return (type === "people") | (item.media_type === "person") ? (
            <RowItemPeople key={item.id} item={item} type={type ? type : item.media_type} />
          ) : (
            <RowItem key={item.id} item={item} type={type ? type : item.media_type} />
          );
        })}
      </div>
    </div>
  );
}
