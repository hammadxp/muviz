import MainRowItem from "./MainRowItem";
import { mainRowContent } from "/public/content/mainRowContent";

export default function MainRow() {
  return (
    <div className="max-w-8xl grid grid-cols-5 gap-6" id="main-row">
      {mainRowContent.map((item) => {
        return <MainRowItem key={item.id} item={item} />;
      })}
    </div>
  );
}
