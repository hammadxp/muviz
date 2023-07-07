import Row from "./Row";

export default function RowsContainer() {
  return (
    <>
      <Row endpoint="https://api.themoviedb.org/3/discover/movie" id="discover/movies" title="Discover Movies" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/discover/tv" id="discover/shows" title="Discover Shows" rowType="show" />

      <Row endpoint="https://api.themoviedb.org/3/trending/all/day" id="trending/all" title="Trending" rowType="mixed" posterWide />
      <Row endpoint="https://api.themoviedb.org/3/trending/movie/day" id="trending/movies" title="Trending /Movies" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/trending/tv/day" id="trending/shows" title="Trending /Shows" rowType="show" />
      <Row endpoint="https://api.themoviedb.org/3/trending/person/day" id="trending/people" title="Trending /People" rowType="people" />

      <Row endpoint="https://api.themoviedb.org/3/movie/now_playing" id="movies/now-playing" title="Now Playing /Movies" rowType="movie" posterWide />
      <Row endpoint="https://api.themoviedb.org/3/tv/airing_today" id="shows/airing-today" title="Airing Today /Shows" rowType="show" />
      <Row endpoint="https://api.themoviedb.org/3/tv/on_the_air" id="shows/on-the-air" title="On The Air /Shows" rowType="show" />

      <Row endpoint="https://api.themoviedb.org/3/movie/popular" id="movies/popular" title="Popular /Movies" rowType="movie" posterWide />
      <Row endpoint="https://api.themoviedb.org/3/tv/popular" id="shows/popular" title="Popular /Shows" rowType="show" posterWide />

      <Row endpoint="https://api.themoviedb.org/3/movie/top_rated" id="movies/top-rated" title="Top Rated /Movies" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/tv/top_rated" id="shows/top-rated" title="Top Rated /Shows" rowType="show" />

      <Row endpoint="https://api.themoviedb.org/3/movie/upcoming" id="movies/upcoming" title="Upcoming /Movies" rowType="movie" posterWide />

      {/* <Row endpoint="https://api.themoviedb.org/3/person/popular" id="people-popular" title="Popular (People)" rowType="people" /> */}

      {/* <Row endpoint="https://api.themoviedb.org/3/genre/movie/list" id="genre/movies" title="Genre (Movies)" />
      <Row endpoint="https://api.themoviedb.org/3/genre/tv/list" id="genre/shows" title="Genre (Shows)" /> */}
    </>
  );
}
