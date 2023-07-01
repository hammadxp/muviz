import Row from "./Row";

export default function RowsContainer() {
  return (
    <>
      {/* <Row endpoint="https://api.themoviedb.org/3/trending/all/day" id="trending-all" title="Trending" type={null} />
      <Row endpoint="https://api.themoviedb.org/3/trending/person/day" id="trending-people" title="Trending people" type="people" /> */}

      <Row endpoint="https://api.themoviedb.org/3/discover/movie" id="discover-movies" title="Discover movies" rowType="movie" />
      <Row endpoint="https://api.themoviedb.org/3/discover/tv" id="discover-shows" title="Discover shows" rowType="show" />

      {/* <Row endpoint="https://api.themoviedb.org/3/trending/all/day" id="trending-all" title="Trending" type={null} />
      <Row endpoint="https://api.themoviedb.org/3/trending/movie/day" id="trending-movies" title="Trending movies" type="movie" />
      <Row endpoint="https://api.themoviedb.org/3/trending/tv/day" id="trending-shows" title="Trending shows" type="show" />
      <Row endpoint="https://api.themoviedb.org/3/trending/person/day" id="trending-people" title="Trending people" type="people" />

      <Row endpoint="https://api.themoviedb.org/3/movie/now_playing" id="movies-airing-today" title="Airing today (Movies)" type="movie" />
      <Row endpoint="https://api.themoviedb.org/3/movie/popular" id="movies-popular" title="Popular (Movies)" type="movie" />
      <Row endpoint="https://api.themoviedb.org/3/movie/top_rated" id="movies-top-rated" title="Top rated (Movies)" type="movie" />
      <Row endpoint="https://api.themoviedb.org/3/movie/upcoming" id="movies-upcoming" title="Upcoming (Movies)" type="movie" />

      <Row endpoint="https://api.themoviedb.org/3/tv/airing_today" id="shows-airing-today" title="Airing today (Shows)" type="tv" />
      <Row endpoint="https://api.themoviedb.org/3/tv/on_the_air" id="shows-on-the-air" title="On the air (Shows)" type="tv" />
      <Row endpoint="https://api.themoviedb.org/3/tv/popular" id="shows-popular" title="Popular (Shows)" type="tv" />
      <Row endpoint="https://api.themoviedb.org/3/tv/top_rated" id="shows-top-rated" title="Top rated (Shows)" type="tv" /> */}

      {/* <Row endpoint="https://api.themoviedb.org/3/person/popular" id="people-popular" title="Popular (People)" type="people" /> */}

      {/* <Row endpoint="https://api.themoviedb.org/3/genre/movie/list" id="genre-movies" title="Genre (Movies)" />
      <Row endpoint="https://api.themoviedb.org/3/genre/tv/list" id="genre-shows" title="Genre (Shows)" /> */}
    </>
  );
}
