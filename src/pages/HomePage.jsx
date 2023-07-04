import Banner from "../components/Banner";
import RowsContainer from "../components/RowsContainer";
import RowMain from "../components/RowMain";

export default function HomePage() {
  return (
    <div className="max-w-9xl p-8">
      <Banner />
      <RowMain />
      <RowsContainer />
    </div>
  );
}
