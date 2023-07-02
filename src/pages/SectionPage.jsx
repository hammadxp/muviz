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
