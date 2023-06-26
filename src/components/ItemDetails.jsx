import { backdropBaseURL } from "../utilites/tmdb";
import calculateRuntime from "../utilites/calculateRuntime";
import trimYear from "../utilites/trimYear";
import { Link } from "react-router-dom";
// import Color from "colorjs.io/types/src";
// import getDominantColor from "../utilites/getDominantColor";
// import { useColor } from "color-thief-react";
import Color from "color-thief-react";

export default function ItemDetails({ item, images, type }) {
  const image = backdropBaseURL + item?.backdrop_path;
  // getDominantColor(image);
  // const { data } = useColor(image);
  // console.log(data);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${backdropBaseURL + item.backdrop_path})`,
      }}
    >
      <div
        className="h-screen w-screen"
        style={{ background: "radial-gradient(farthest-corner at top right, rgba(0,0,0,0),rgba(0,0,0,0.1), rgba(0,0,0,1))" }}
      >
        <img src={backdropBaseURL + images?.logos[0].file_path} alt="" className="w-40" />
        <h2>{(type === "movie" && item.title) || (type === "show" && item.name)}</h2>
        <p>{item.overview}</p>
        <p>{trimYear(item.release_date)}</p>
        <p>{calculateRuntime(item.runtime)}</p>
        <p>{item.tagline}</p>
        <a href={item.homepage} target="_blank" rel="noreferrer">
          Homepage
        </a>
        <a href={`https://www.imdb.com/title/${item.imdb_id}`}>IMDb</a>

        <h3>Collection:</h3>
        <Link to={`/collection/${item.belongs_to_collection.id}`}>
          <img src={backdropBaseURL + item.belongs_to_collection.backdrop_path} alt="" className="w-40" />
        </Link>
        <p>{item.belongs_to_collection.name}</p>

        <p>
          {item.genres.map((genre, i) => {
            return `${genre.name}${item.genres.length === i + 1 ? "" : ", "}`;
          })}
        </p>

        <div>
          <button>Play</button>
          <button>Trailer</button>
          <button>+</button>
          <button>-</button>
        </div>

        <Color src={image} format="hex">
          {({ data, loading, error }) => <div style={{ color: data }}>Text with the predominant color</div>}
        </Color>
      </div>
    </div>
  );
}
