import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../hooks/useFetcher";
import { useGetShowDetails } from "../hooks/useFetcher";

export default function ItemDetails() {
  const { itemId } = useParams();

  const { movieError, data: movieDetails } = useGetMovieDetails(itemId);
  const { showError, data: showDetails } = useGetShowDetails(itemId);

  const itemDetails = movieError?.response.status === 404 ? showDetails : movieDetails;
  console.log(itemDetails);

  return <div>Item details {itemId}</div>;
}
