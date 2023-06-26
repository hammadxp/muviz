import { useParams } from "react-router-dom";
import { useFetchShowDetails } from "../hooks/useFetchShowDetails";
import ItemDetails from "../components/ItemDetails";

export default function ShowDetails() {
  const { showId } = useParams();
  const { isLoading, isError, error, data } = useFetchShowDetails(showId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ItemDetails item={data} type="show" />;
}
