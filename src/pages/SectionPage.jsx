import { useLocation } from "react-router-dom";
import { useFetchSection } from "../hooks/useFetchSection";
import SectionContainer from "../components/SectionContainer";

export default function SectionPage() {
  const url = useLocation();

  let title;
  let sectionType;
  let endpoint;
  const endpointBase = "https://api.themoviedb.org/3";

  switch (url.pathname) {
    case "/movies":
      endpoint = `${endpointBase}/trending/movie/day`;
      title = "Movies";
      sectionType = "movie";
      break;
    case "/shows":
      endpoint = `${endpointBase}/trending/tv/day`;
      title = "Shows";
      sectionType = "show";
      break;
    case "/originals":
      endpoint = `${endpointBase}/trending/all/day`;
      title = "Originals";
      sectionType = "mixed";
      break;

    case "/discover/movies":
      endpoint = `${endpointBase}/discover/movie`;
      title = "Discover /Movies";
      sectionType = "movie";
      break;
    case "/discover/shows":
      endpoint = `${endpointBase}/discover/tv`;
      title = "Discover /Shows";
      sectionType = "show";
      break;

    case "/trending/all":
      endpoint = `${endpointBase}/trending/all/day`;
      title = "Trending /All";
      sectionType = "mixed";
      break;
    case "/trending/movies":
      endpoint = `${endpointBase}/trending/movie/day`;
      title = "Trending /Movies";
      sectionType = "movie";
      break;
    case "/trending/shows":
      endpoint = `${endpointBase}/trending/tv/day`;
      title = "Trending /Shows";
      sectionType = "show";
      break;
    case "/trending/people":
      endpoint = `${endpointBase}/trending/person/day`;
      title = "Trending /People";
      sectionType = "people";
      break;

    case "/movies/now-playing":
      endpoint = `${endpointBase}/movie/now_playing`;
      title = "Now Playing /Movies";
      sectionType = "movie";
      break;
    case "/shows/airing-today":
      endpoint = `${endpointBase}/tv/airing_today`;
      title = "Airing Today /Shows";
      sectionType = "show";
      break;
    case "/shows/on-the-air":
      endpoint = `${endpointBase}/tv/on_the_air`;
      title = "On The Air /Shows";
      sectionType = "show";
      break;

    case "/movies/popular":
      endpoint = `${endpointBase}/movie/popular`;
      title = "Popluar /Movies";
      sectionType = "movie";
      break;
    case "/shows/popular":
      endpoint = `${endpointBase}/tv/popular`;
      title = "Popluar /Shows";
      sectionType = "show";
      break;

    case "/movies/top-rated":
      endpoint = `${endpointBase}/movie/top_rated`;
      title = "Top Rated /Movies";
      sectionType = "movie";
      break;
    case "/shows/top-rated":
      endpoint = `${endpointBase}/tv/top_rated`;
      title = "Top Rated /Shows";
      sectionType = "show";
      break;

    case "/movies/upcoming":
      endpoint = `${endpointBase}/movie/upcoming`;
      title = "Upcoming /Movies";
      sectionType = "movie";
      break;
  }

  const { isLoading, isError, error, data } = useFetchSection(endpoint, url.pathname);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error}</p>;
  }

  return <SectionContainer items={data?.results} title={title} sectionType={sectionType} />;
}
