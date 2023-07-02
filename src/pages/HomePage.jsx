import Banner from "../components/Banner";
import RowsContainer from "../components/RowsContainer";
import MainRow from "../components/MainRow";

export default function HomePage() {
  return (
    <div className="max-w-9xl p-8">
      {/* <Banner /> */}
      <MainRow />
      <RowsContainer />
    </div>
  );
}
