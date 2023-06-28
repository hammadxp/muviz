import { useParams } from "react-router-dom";
import { useFetchMovieDetails } from "../hooks/useFetchMovieDetails";
import { useFetchMovieImages } from "../hooks/useFetchMovieImages";
import { useFetchSimilarMovies } from "../hooks/useFetchSimilarMovies";
import ItemDetails from "../components/ItemDetails";

export default function MovieDetails() {
  const { movieId } = useParams();
  const { isLoading, isError, error, data } = useFetchMovieDetails(movieId);
  const { isLoading: imagesIsLoading, isError: imagesIsError, error: imagesError, data: imagesData } = useFetchMovieImages(movieId);
  const {
    isLoading: similarMoviesIsLoading,
    isError: similarMoviesIsError,
    error: similarMoviesError,
    data: similarMoviesData,
  } = useFetchSimilarMovies(movieId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ItemDetails item={data} images={imagesData} similarMovies={similarMoviesData?.results} type="movie" />;
}
