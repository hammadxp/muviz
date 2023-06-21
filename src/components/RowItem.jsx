import { posterBaseURL } from "../utilites/tmdb";

export default function RowItem({ item }) {
  return (
    <div className="flex w-36 flex-none flex-col gap-1 overflow-hidden">
      <img src={`${posterBaseURL}${item.poster_path}`} alt={`${item.title} poster`} className="rounded-md" />
      <h2 className=" text-sm uppercase">{item.title}</h2>
    </div>
  );
}
