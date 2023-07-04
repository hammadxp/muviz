import PosterCategory from "./PosterCategory";
import { mainRowContent } from "/public/content/mainRowContent";

export default function RowMain() {
  return (
    <div className="max-w-8xl mb-8 mt-14 grid grid-cols-5 gap-6" id="main-row">
      {mainRowContent.map((item) => {
        return <PosterCategory key={item.id} item={item} />;
      })}
    </div>
  );
}
