import { useParams } from "react-router-dom";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails";
import ItemDetails from "../components/ItemDetails";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  return <p>!!! Something went wrong !!!</p>;
}

export default function MovieDetails() {
  const { movieId } = useParams();
  const { isLoading, isError, error, data } = useFetchMovieDetails(movieId);

  data && console.log(data);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ItemDetails item={data} type="movie" />;
    </ErrorBoundary>
  );
}
