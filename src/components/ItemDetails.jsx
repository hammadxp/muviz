import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import { HiPlay, HiPlus, HiUserGroup } from "react-icons/hi2";
import trimYear from "../utilites/trimYear";
import calculateRuntime from "../utilites/calculateRuntime";
import { backdropBaseURL, backdropLargeBaseURL, logoBaseURL } from "../utilites/tmdb";
import ItemDetailsBgImage from "./ItemDetailsBgImage";
import RowItem from "./RowItem";
import { motion } from "framer-motion";

export default function ItemDetails({ item, images, similarItems, itemType }) {
  if (!item) return;

  const bgImage = backdropLargeBaseURL + item?.backdrop_path;

  return (
    <div>
      <ItemDetailsBgImage bgImage={bgImage}>
        <div className="mx-auto max-w-7xl px-4 py-32">
          {/* Title logo */}
          <div className="flex h-48 w-80 items-start justify-center py-4">
            <img src={backdropLargeBaseURL + images?.logos[0].file_path} alt="item logo" />
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
        <Tabs.Root defaultValue="tab-similar" className="h-96">
          <Tabs.List aria-label="Item extra details section" className="my-6 transition-all">
            <Tabs.Trigger value="tab-similar" className="data-[state=active]:tab-selected relative px-4 py-2 text-lg uppercase">
              Similar
            </Tabs.Trigger>
            <Tabs.Trigger value="tab-collection" className="data-[state=active]:tab-selected relative px-4 py-2 text-lg uppercase">
              Collection
            </Tabs.Trigger>
            <Tabs.Trigger value="tab-details" className="data-[state=active]:tab-selected relative px-4 py-2 text-lg uppercase">
              Details
            </Tabs.Trigger>

            <div className="h-[2px] w-full rounded-full bg-slate-700"></div>
          </Tabs.List>

          {/* Tabs Content */}

          <Tabs.Content value="tab-similar">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 overflow-x-scroll p-1 [&::-webkit-scrollbar]:hidden">
              {similarItems?.map((item) => {
                return <RowItem key={item.id} item={item} rowType={itemType} />;
              })}
            </motion.div>
          </Tabs.Content>

          <Tabs.Content value="tab-collection">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-4 gap-x-4 gap-y-6 pb-6">
              <div className="p-2">
                <Link to={`/collection/${item.belongs_to_collection?.id}`}>
                  <img
                    src={backdropBaseURL + item.belongs_to_collection?.backdrop_path}
                    alt={item.belongs_to_collection?.name + " backdrop"}
                    className="w-full rounded-md shadow-lg transition hover:scale-[.97]"
                  />
                  <p className="mt-4 w-fit">{item.belongs_to_collection?.name}</p>
                </Link>
              </div>
            </motion.div>
          </Tabs.Content>

          <Tabs.Content value="tab-details">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-2">
              <p>Title: {(itemType === "movie" && item.title) || (itemType === "show" && item.name)}</p>
              <p>Tagline: {item.tagline}</p>
              <p>Collection: {item.belongs_to_collection?.name}</p>
              <br />

              <p>Runtime: {calculateRuntime(itemType === "movie" ? item.runtime : item.episode_run_time)}</p>
              <p>Release Date: {item.release_date}</p>
              <br />

              <div>
                <p>
                  Genres:{" "}
                  {item.genres.map((genre, i) => {
                    return `${genre.name}${item.genres.length === i + 1 ? "" : ", "}`;
                  })}
                </p>
              </div>
              <div>
                <p>
                  Spoken Languages:{" "}
                  {item.spoken_languages.map((lang, i) => {
                    return `${lang.english_name}${item.spoken_languages.length === i + 1 ? "" : ", "}`;
                  })}
                </p>
              </div>
              <br />

              <p>
                Homepage:{" "}
                <a href={item.homepage} target="_blank" rel="noreferrer">
                  {item.homepage}
                </a>
              </p>
              <p>
                IMDb:{" "}
                <a href={item.imdb_id} target="_blank" rel="noreferrer">
                  {item.imdb_id}
                </a>
              </p>
              <br />

              <div>
                <p>
                  Production Countries:{" "}
                  {item.production_countries.map((country, i) => {
                    return `${country.name}${item.production_countries.length === i + 1 ? "" : ", "}`;
                  })}
                </p>
              </div>
              <div>
                <p>Production Companies:</p>
                <div className="grid grid-cols-4 gap-x-4 gap-y-6 py-4">
                  {item.production_companies.map((company, i) => {
                    return (
                      <div key={i} className="flex h-28 items-center justify-center overflow-hidden rounded-md bg-slate-800 p-4">
                        {company.logo_path ? (
                          <img src={logoBaseURL + company.logo_path} alt="" className="w-full rounded-md shadow-lg transition hover:scale-[.97]" />
                        ) : (
                          <p className="text-center text-xl font-bold uppercase text-slate-400">{company.name}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
