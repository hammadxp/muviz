import { useLocation, useParams } from "react-router-dom";
import { useFetchItemDetails } from "../hooks/useFetchItemDetails";
import { useFetchItemImages } from "../hooks/useFetchItemImages";
import { useFetchItemVideos } from "../hooks/useFetchItemVideos";
import { useFetchItemSimilar } from "../hooks/useFetchItemSimilar";
import { useFetchItemEpisodes } from "../hooks/useFetchItemEpisodes";
import ItemDetails from "../components/ItemDetails";

export default function ItemDetailsPage() {
  const url = useLocation();
  const itemType = (url.pathname.includes("/movie/") && "movie") || (url.pathname.includes("/show/") && "show");

  const { movieId, showId } = useParams();
  const itemId = itemType === "movie" ? movieId : showId;

  const { isLoading, isError, error, data: itemData } = useFetchItemDetails(itemId, itemType);
  const { isLoading: imagesIsLoading, isError: imagesIsError, error: imagesError, data: imagesData } = useFetchItemImages(itemId, itemType);

  const {
    isLoading: videosIsLoading,
    isError: videosIsError,
    error: videosError,
    data: videosData,
    refetch: videosRefetch,
  } = useFetchItemVideos(itemId, itemType);

  const {
    isLoading: similarItemsIsLoading,
    isError: similarItemsIsError,
    error: similarItemsError,
    data: similarItemsData,
  } = useFetchItemSimilar(itemId, itemType);

  const seasonNumber = itemData?.last_episode_to_air?.season_number;

  const {
    isLoading: episodesIsLoading,
    isError: episodesIsError,
    error: episodesError,
    data: episodesData,
  } = useFetchItemEpisodes(itemId, seasonNumber);

  if (isLoading) {
    return <p className="flex h-[80vh] items-center justify-center text-xl font-bold 600px:h-[70vh]">Loading...</p>;
  }

  return (
    <ItemDetails
      item={itemData}
      images={imagesData}
      videos={videosData?.results}
      videosRefetch={videosRefetch}
      similarItems={similarItemsData?.results}
      episodes={episodesData?.episodes}
      itemType={itemType}
    />
  );
}
