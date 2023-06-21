import Row from "./Row";
import { api } from "../utilites/tmdb";

export default function RowsContainer() {
  return (
    <>
      <Row url={api.moviesNowPlaying} />
      {/* <Row endpoint={apis.moviesPopular} /> */}
      {/* <Row endpoint={apis.moviesTopRated} /> */}
      {/* <Row endpoint={apis.moviesUpcoming} /> */}
    </>
  );
}
