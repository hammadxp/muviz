import { backdropBaseURL } from "../utilites/tmdb";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SectionItem({ item, sectionType }) {
  const itemType = sectionType === "mixed" ? item.media_type : sectionType;

  return (
    <>
      <div key={item.id} className="h-full w-full p-2">
        <Link to={"/" + sectionType + "/" + item.id.toString()} className="block transition hover:scale-[.97]">
          <LazyLoadImage
            src={backdropBaseURL + item.backdrop_path}
            alt={item.title + "backdrop"}
            height={192}
            width={"100%"}
            className="h-full w-full rounded-md object-cover object-center shadow-lg"
            placeholderSrc="images/placeholder-image.svg"
          />
          <p className="my-2">{itemType === "movie" ? item.title : item.name}</p>
        </Link>
      </div>
    </>
  );
}
