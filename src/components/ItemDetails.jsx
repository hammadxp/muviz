import { backdropBaseURL } from "../utilites/tmdb";

export default function ItemDetails({ item, type }) {
  console.log("item:", item);

  return (
    // <></>
    <div
      className="h-screen text-white"
      style={{
        backgroundImage: `url(${backdropBaseURL + item.backdrop_path})`,
      }}
    >
      <div className="h-screen bg-[linear-gradient(to_top,rgba(0,0,0,0.3),rgba(0,0,0,0.3))]">
        <h2>{(type === "movie" && item.title) || (type === "show" && item.name)}</h2>
        <p>{item.overview}</p>
      </div>
    </div>
  );
}
