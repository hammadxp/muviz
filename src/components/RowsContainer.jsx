import Row from "./Row";
// import { api } from "../utilites/tmdb";

export default function RowsContainer() {
  // const url = api.moviesNowPlaying;
  // const url = "https://api.themoviedb.org/3/movie/now_playing";

  return (
    <div className="mt-4">
      <Row url={"https://api.themoviedb.org/3/movie/now_playing"} title={"Now Playing"} titleShort={"now-playing"} />
      {/* <Row url={api.moviesPopular} title={"Popular"} titleShort={"popular"} /> */}
      {/* <Row url={api.moviesTopRated} title={"Top rated"} titleShort={"top-rated"} /> */}
      {/* <Row url={api.moviesUpcoming} title={"Upcoming"} titleShort={"upcoming"} /> */}
    </div>
  );
}
