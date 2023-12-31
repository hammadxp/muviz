import * as Tabs from "@radix-ui/react-tabs";
import { HiPlay, HiPlus, HiUserGroup } from "react-icons/hi2";
import trimYear from "../utilites/trimYear";
import calculateRuntime from "../utilites/calculateRuntime";
import { backdropLargeBaseURL, logoBaseURL, logoLargeBaseURL } from "../utilites/tmdb";
import ItemDetailsBgImage from "./ItemDetailsBgImage";
import { motion } from "framer-motion";
import PosterTall from "./PosterTall";
import PosterCollection from "./PosterCollection";
import PosterEpisode from "./PosterEpisode";
import * as Dialog from "@radix-ui/react-dialog";
import { Helmet } from "react-helmet-async";

export default function ItemDetails({ item, images, videos, videosRefetch, similarItems, episodes, itemType }) {
  if (!item) return;

  const title = (itemType === "movie" && item.title) || (itemType === "show" && item.name) || (itemType === "people" && item.name);
  const tagline = item.tagline;
  const overview = item.overview;

  const collection = item.belongs_to_collection || null;
  const runtime = (itemType === "movie" && calculateRuntime(item.runtime)) || null;
  const release_date = (itemType === "movie" && trimYear(item.release_date)) || null;
  const genres = item.genres.map((genre, i) => `${genre.name}${item.genres.length === i + 1 ? "" : ", "}`);

  const totalSeasons = (itemType === "show" && item.number_of_seasons) || null;
  const totalEpisodes = (itemType === "show" && item.number_of_episodes) || null;
  const latestSeason = (itemType === "show" && item.last_episode_to_air.season_number) || null;
  const latestEpisode = (itemType === "show" && item.last_episode_to_air.episode_number) || null;
  const latestEpisodeAirDate = (itemType === "show" && trimYear(item.last_episode_to_air.air_date)) || null;
  const latestEpisodeRuntime = (itemType === "show" && calculateRuntime(item.last_episode_to_air.runtime)) || null;

  const bgImage = backdropLargeBaseURL + item?.backdrop_path;

  return (
    <>
      <Helmet>
        <title>{title} &mdash; Muviz</title>
        <meta name="description" content={overview} />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={overview} />
        <meta property="og:site_name" content="Muviz" />
      </Helmet>

      <div>
        <ItemDetailsBgImage bgImage={bgImage}>
          <div className="mx-auto max-w-7xl px-4 py-16">
            {/* Title logo */}
            <div className="flex h-48 w-80 items-center justify-center 600px:mx-auto">
              {images?.logos.length === 0 || images?.logos === undefined ? (
                <span className="text-center text-xl font-bold uppercase">{title}</span>
              ) : (
                <img src={logoLargeBaseURL + images?.logos[0]?.file_path} alt="item logo" className="max-h-48" />
              )}
            </div>

            {/* Release Year & Runtime */}
            {itemType === "movie" && (
              <div className="flex gap-1 font-semibold 600px:mx-auto 600px:w-fit">
                <span>{release_date}</span>
                <span>&middot;</span>
                <span>{runtime}</span>
              </div>
            )}

            {itemType === "show" && (
              <div className="flex gap-1 font-semibold 600px:mx-auto 600px:w-fit">
                <span>{latestEpisodeAirDate}</span>
                <span>&middot;</span>
                <span>S{latestSeason}</span>
                <span>E{latestEpisode}</span>
              </div>
            )}

            {/* Genres */}
            <p className="py-1 600px:text-center">{genres}</p>

            {/* Buttons */}
            <div className="flex gap-4 py-6 600px:mx-auto 600px:w-fit">
              <button className="flex items-center gap-2 rounded-md border-2 border-white bg-slate-50 px-6 py-3 font-semibold uppercase text-black transition hover:border-slate-900 hover:bg-slate-900 hover:text-slate-50">
                <HiPlay className={"text-xl"} /> Play
              </button>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    className="flex items-center gap-2 rounded-md border-2 border-slate-50 bg-slate-900/60 px-6 py-3 font-semibold uppercase transition hover:border-transparent hover:bg-slate-900"
                    onClick={videosRefetch}
                  >
                    Trailer
                  </button>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter" />

                  <Dialog.Content className="fixed left-[50%] top-[50%] z-30 aspect-video w-[90vw] max-w-[854px] translate-x-[-50%] translate-y-[-50%] bg-black shadow-xl focus:outline-none">
                    <iframe
                      src={`https://www.youtube.com/embed/${videos && videos[0].key}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className="h-full w-full"
                    ></iframe>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <button className="rounded-full border-2 border-slate-50 bg-slate-900/60 px-2 transition hover:border-transparent hover:bg-slate-900">
                <HiPlus size={"2em"} />
              </button>
              <button className="rounded-full border-2 border-slate-50 bg-slate-900/60 px-2 transition hover:border-transparent hover:bg-slate-900">
                <HiUserGroup size={"2em"} />
              </button>
            </div>

            {/* Overview */}
            <p className="max-w-3xl py-4 600px:text-center">{overview}</p>
          </div>
        </ItemDetailsBgImage>

        <div className="mx-auto max-w-7xl p-4">
          <Tabs.Root defaultValue={(collection && "tab-collection") || (itemType === "show" && "tab-episodes") || "tab-details"}>
            <Tabs.List aria-label="Item extra details section" className="my-6 transition-all">
              {collection && (
                <Tabs.Trigger value="tab-collection" className="data-[state=active]:tab-selected relative px-4 py-2 text-lg uppercase">
                  Collection
                </Tabs.Trigger>
              )}
              {itemType === "show" && (
                <Tabs.Trigger value="tab-episodes" className="data-[state=active]:tab-selected relative px-4 py-2 text-lg uppercase">
                  Episodes
                </Tabs.Trigger>
              )}
              <Tabs.Trigger value="tab-details" className="data-[state=active]:tab-selected relative px-4 py-2 text-lg uppercase">
                Details
              </Tabs.Trigger>

              <div className="h-[2px] w-full rounded-full bg-slate-700"></div>
            </Tabs.List>

            {/* Tabs Content */}

            {collection && (
              <Tabs.Content value="tab-collection">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-4 gap-x-4 gap-y-6 600px:grid-cols-2">
                  <PosterCollection title={collection.name} posterId={collection.backdrop_path} collectionId={collection.id} />
                </motion.div>
              </Tabs.Content>
            )}

            <Tabs.Content value="tab-episodes">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4 overflow-x-scroll p-1 [&::-webkit-scrollbar]:hidden"
              >
                {episodes?.map((episode) => {
                  return <PosterEpisode key={episode.id} episode={episode} />;
                })}
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="tab-details">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-2">
                {title && <p>Title: {title}</p>}
                {tagline && <p>Tagline: {tagline}</p>}
                <br />

                {itemType === "movie" && (
                  <>
                    <p>Release Date: {item.release_date}</p>
                    <p>Runtime: {calculateRuntime(itemType === "movie" ? item.runtime : item.episode_run_time)}</p>
                    <br />
                  </>
                )}

                {itemType === "show" && (
                  <>
                    <p>Release Date (Latest Episode): {latestEpisodeAirDate}</p>
                    <p>Runtime (Latest Episode): {latestEpisodeRuntime}</p>
                    <br />
                  </>
                )}

                <div>
                  <p>Genres: {genres}</p>
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
                {itemType === "movie" && (
                  <p>
                    IMDb:{" "}
                    <a href={item.imdb_id} target="_blank" rel="noreferrer">
                      {item.imdb_id}
                    </a>
                  </p>
                )}
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
                  <div className="grid grid-cols-6 gap-x-4 gap-y-6 py-4 600px:grid-cols-3">
                    {item.production_companies.map((company, i) => {
                      return (
                        <div
                          key={i}
                          className="flex h-24 items-center justify-center overflow-hidden rounded-md bg-slate-800 px-4 shadow-lg transition hover:scale-[.97]"
                        >
                          {company.logo_path ? (
                            <img src={logoBaseURL + company.logo_path} alt="" className="max-h-20 " />
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

        <div className="mx-auto max-w-7xl p-4">
          <h2 className="mb-4 ml-2 text-xl font-bold uppercase">Similar</h2>
          <div className="flex gap-4 overflow-x-scroll p-1 [&::-webkit-scrollbar]:hidden">
            {similarItems?.map((item) => {
              return <PosterTall key={item.id} item={item} itemType={itemType} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
