import Row from "./Row";

export default function RowsContainer() {
  return (
    <>
      <Row endpoint="https://api.themoviedb.org/3/trending/all/day" id="trending/all" title="Trending" rowType="mixed" />
      <Row endpoint="https://api.themoviedb.org/3/trending/person/day" id="trending-people" title="Trending people" rowType="people" />

      <Row endpoint="https://api.themoviedb.org/3/discover/movie" id="discover/movies" title="Discover movies" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/discover/tv" id="discover/shows" title="Discover shows" rowType="show" />

      <Row endpoint="https://api.themoviedb.org/3/trending/all/day" id="trending/all" title="Trending" rowType="mixed" />
      <Row endpoint="https://api.themoviedb.org/3/trending/movie/day" id="trending/movies" title="Trending movies" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/trending/tv/day" id="trending/shows" title="Trending shows" rowType="show" />
      <Row endpoint="https://api.themoviedb.org/3/trending/person/day" id="trending/people" title="Trending people" rowType="people" />

      <Row endpoint="https://api.themoviedb.org/3/movie/now_playing" id="movies/airing-today" title="Airing today (Movies)" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/movie/popular" id="movies/popular" title="Popular (Movies)" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/movie/top_rated" id="movies/top-rated" title="Top rated (Movies)" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/movie/upcoming" id="movies/upcoming" title="Upcoming (Movies)" rowType="movie" />

      <Row endpoint="https://api.themoviedb.org/3/tv/airing_today" id="shows/airing-today" title="Airing today (Shows)" rowType="show" />
      <Row endpoint="https://api.themoviedb.org/3/tv/on_the_air" id="shows/on-the-air" title="On the air (Shows)" rowType="show" />
      <Row endpoint="https://api.themoviedb.org/3/tv/popular" id="shows/popular" title="Popular (Shows)" rowType="show" />
      <Row endpoint="https://api.themoviedb.org/3/tv/top_rated" id="shows/top-rated" title="Top rated (Shows)" rowType="show" />

      {/* <Row endpoint="https://api.themoviedb.org/3/person/popular" id="people-popular" title="Popular (People)" rowType="people" /> */}

      {/* <Row endpoint="https://api.themoviedb.org/3/genre/movie/list" id="genre/movies" title="Genre (Movies)" />
      <Row endpoint="https://api.themoviedb.org/3/genre/tv/list" id="genre/shows" title="Genre (Shows)" /> */}
    </>
  );
}
