import Row from "./Row";
import { api } from "../utilites/tmdb";

export default function RowsContainer() {
  return (
    <div className="mt-4">
      <Row url={api.moviesNowPlaying} title={"Now Playing"} titleShort={"now-playing"} />
      {/* <Row url={api.moviesPopular} title={"Popular"} titleShort={"popular"} /> */}
      {/* <Row url={api.moviesTopRated} title={"Top rated"} titleShort={"top-rated"} /> */}
      {/* <Row url={api.moviesUpcoming} title={"Upcoming"} titleShort={"upcoming"} /> */}
    </div>
  );
}
