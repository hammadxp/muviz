import { useLocation, useParams } from "react-router-dom";
import { useFetchItemDetails } from "../hooks/useFetchItemDetails";
import { useFetchItemImages } from "../hooks/useFetchItemImages";
import { useFetchItemSimilar } from "../hooks/useFetchItemSimilar";
import ItemDetails from "../components/ItemDetails";

export default function ItemDetailsPage() {
  const url = useLocation();
  const itemType = (url.pathname.includes("/movie/") && "movie") || (url.pathname.includes("/show/") && "show");

  const { movieId, showId } = useParams();
  const itemId = itemType === "movie" ? movieId : showId;

  const { isLoading, isError, error, data } = useFetchItemDetails(itemId, itemType);
  const { isLoading: imagesIsLoading, isError: imagesIsError, error: imagesError, data: imagesData } = useFetchItemImages(itemId, itemType);

  const {
    isLoading: similarItemsIsLoading,
    isError: similarItemsIsError,
    error: similarItemsError,
    data: similarItemsData,
  } = useFetchItemSimilar(itemId, itemType);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ItemDetails item={data} images={imagesData} similarItems={similarItemsData?.results} itemType={itemType} />;
}
