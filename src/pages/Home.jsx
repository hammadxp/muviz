import Banner from "../components/Banner";
import RowsContainer from "../components/RowsContainer";
import MainRow from "../components/MainRow";
import Temp from "../components/Temp";

export default function Home() {
  return (
    <div className="max-w-9xl bg-slate-900 p-8 font-Rubik text-slate-50">
      <Banner />
      <MainRow />
      <RowsContainer />
      {/* <Temp /> */}
    </div>
  );
}
