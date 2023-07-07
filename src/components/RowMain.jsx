import PosterCategory from "./PosterCategory";
import { mainRowContent } from "/public/content/mainRowContent";

export default function RowMain() {
  return (
    <div className="max-w-8xl mb-8 mt-14 grid grid-cols-5 place-items-center gap-6 600px:grid-cols-3 600px:gap-x-0 600px:gap-y-4" id="main-row">
      {mainRowContent.map((item) => {
        return <PosterCategory key={item.id} item={item} />;
      })}
    </div>
  );
}
