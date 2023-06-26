import { useParams } from "react-router-dom";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails";
import { useFetchMovieImages } from "../hooks/useFetchMovieImages";
import ItemDetails from "../components/ItemDetails";

export default function MovieDetails() {
  const { movieId } = useParams();
  const { isLoading, isError, error, data } = useFetchMovieDetails(movieId);
  const { isLoading: imagesIsLoading, isError: imagesIsError, error: imagesError, data: imagesData } = useFetchMovieImages(movieId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ItemDetails item={data} images={imagesData} type="movie" />;
}
