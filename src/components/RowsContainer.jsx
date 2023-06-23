import Row from "./Row";
import { api } from "../utilites/tmdb";
import Temp from "./Temp";

export default function RowsContainer() {
  return (
    <div className="mt-4">
      <Row url={api.moviesNowPlaying} title={"Now Playing"} titleShort={"now-playing"} />
      {/* <Row url={api.moviesPopular} title={"Popular"} titleShort={"popular"} /> */}
      {/* <Row url={api.moviesTopRated} title={"Top rated"} titleShort={"top-rated"} /> */}
      {/* <Row url={api.moviesUpcoming} title={"Upcoming"} titleShort={"upcoming"} /> */}
      {/* <Temp url={"https://api.themoviedb.org/3/movie/now_playing"} title={"Now Playing"} titleShort={"now-playing"} /> */}
    </div>
  );
}
