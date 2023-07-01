import { Link } from "react-router-dom";
import { HiPlay, HiPlus, HiUserGroup } from "react-icons/hi2";
import { backdropBaseURL } from "../utilites/tmdb";
import calculateRuntime from "../utilites/calculateRuntime";
import trimYear from "../utilites/trimYear";
import ItemDetailsBgImage from "./ItemDetailsBgImage";
import * as Tabs from "@radix-ui/react-tabs";
import RowItem from "./RowItem";
import Row from "./Row";

export default function ItemDetails({ item, images, similarItems, itemType }) {
  if (!item) return;

  const bgImage = backdropBaseURL + item?.backdrop_path;

  return (
    <div>
      <ItemDetailsBgImage bgImage={bgImage}>
        <div className="mx-auto max-w-7xl px-4 py-32">
          {/* Title logo */}
          <div className="flex h-48 w-80 items-start justify-center py-4">
            <img src={backdropBaseURL + images?.logos[0].file_path} alt="item logo" />
          </div>

          {/* Release Year & Runtime */}
          <div className="flex gap-1 font-semibold">
            <p>{trimYear(itemType === "movie" ? item.release_date : item.last_air_date)}</p>
            <span>&middot;</span>
            <p>{calculateRuntime(itemType === "movie" ? item.runtime : item.episode_run_time)}</p>
          </div>

          {/* Genres */}
          <p className="py-1">
            {item.genres.map((genre, i) => {
              return `${genre.name}${item.genres.length === i + 1 ? "" : ", "}`;
            })}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 py-6">
            <button className="flex items-center gap-2 rounded-md border-2 border-white bg-white px-6 py-3 font-semibold uppercase text-black">
              <HiPlay className={"text-xl"} /> Play
            </button>
            <button className="flex items-center gap-2 rounded-md border-2 border-white bg-slate-900/50 px-6 py-3 font-semibold uppercase">
              Trailer
            </button>
            <button className="rounded-full border-2 border-white bg-slate-900/50 px-2">
              <HiPlus size={"2em"} />
            </button>
            <button className="rounded-full border-2 border-white bg-slate-900/50 px-2">
              <HiUserGroup size={"2em"} />
            </button>
          </div>

          {/* Overview */}
          <p className="max-w-3xl py-4">{item.overview}</p>
        </div>
      </ItemDetailsBgImage>

      <div className="mx-auto max-w-7xl p-4">
        <Tabs.Root defaultValue="itemSimilar" className="h-96">
          <Tabs.List aria-label="Item extra details section" className="my-6 border-b-2 border-slate-50">
            <Tabs.Trigger value="itemSimilar" className="px-4 py-2 text-lg uppercase data-[state=active]:border-b-4">
              Similar
            </Tabs.Trigger>
            <Tabs.Trigger value="itemCollection" className="px-4 py-2 text-lg uppercase data-[state=active]:border-b-4">
              Collection
            </Tabs.Trigger>
            <Tabs.Trigger value="itemDetails" className="px-4 py-2 text-lg uppercase data-[state=active]:border-b-4">
              Details
            </Tabs.Trigger>
          </Tabs.List>

          {/* Tabs Content */}

          <Tabs.Content value="itemSimilar">
            <div className="flex gap-4 overflow-x-scroll p-1 [&::-webkit-scrollbar]:hidden">
              {similarItems?.map((item) => {
                return <RowItem key={item.id} item={item} rowType={itemType} />;
              })}
            </div>
          </Tabs.Content>

          <Tabs.Content value="itemCollection">
            <Link to={`/collection/${item.belongs_to_collection?.id}`}>
              <img src={backdropBaseURL + item.belongs_to_collection?.backdrop_path} alt="" className="w-40" />
            </Link>
            <p>{item.belongs_to_collection?.name}</p>
          </Tabs.Content>

          <Tabs.Content value="itemDetails">
            <div className="mx-auto max-w-7xl px-4">
              <h2>{(itemType === "movie" && item.title) || (itemType === "show" && item.name)}</h2>
              <p>{item.tagline}</p>
              <a href={item.homepage} target="_blank" rel="noreferrer">
                Homepage
              </a>
              <a href={`https://www.imdb.com/title/${item.imdb_id}`}>IMDb</a>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
