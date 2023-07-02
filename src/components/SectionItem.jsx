import { backdropBaseURL } from "../utilites/tmdb";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function SectionItem({ item, sectionType }) {
  return (
    <>
      <Link to={"/" + sectionType + "/" + item.id.toString()} key={item.id} className="h-full w-full bg-slate-800 p-2">
        <div className="h-48 w-full overflow-hidden rounded-md bg-slate-700 shadow-lg transition hover:scale-[.97]">
          <LazyLoadImage
            src={backdropBaseURL + item.backdrop_path}
            alt={item.title + "backdrop"}
            placeholderSrc="/public/images/vite.svg"
            height={"100%"}
            width={"100%"}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <p className="mt-4">{item.title}</p>
      </Link>
    </>
  );
}
