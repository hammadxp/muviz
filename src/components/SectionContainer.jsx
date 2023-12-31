import PosterSection from "./PosterSection";
import { Helmet } from "react-helmet-async";

export default function SectionContainer({ items, title, sectionType }) {
  return (
    <>
      <Helmet>
        <title>{title} &mdash; Muviz</title>
        <meta name="description" content={title + " section of the Muviz app"} />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title + " section of the Muviz app"} />
        <meta property="og:site_name" content="Muviz" />
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="ml-2 pb-8">
          <h2 className="text-3xl font-bold uppercase">{title}</h2>
        </div>

        <div className="grid grid-cols-4 place-items-center gap-4 600px:grid-cols-2">
          {items.map((item) => (
            <PosterSection key={item.id} item={item} sectionType={sectionType} />
          ))}
        </div>
      </div>
    </>
  );
}
