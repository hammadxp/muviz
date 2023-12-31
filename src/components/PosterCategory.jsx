import { Link } from "react-router-dom";

export default function PosterCategory({ item }) {
  const title = item.title;
  const titleShort = item.titleShort;

  return (
    <Link
      to={`/category/${titleShort}`}
      className="flex h-32 w-60 items-center justify-center rounded-xl border-[3px] border-[#41434f] bg-gradient-to-b from-[#31313d] to-[#20202a] shadow-2xl transition hover:scale-[.98] hover:shadow-white/10 600px:h-24 600px:w-40"
    >
      <div className="w-40  600px:w-28">
        <img src={`images/main-row/${titleShort}.png`} alt={`${title} logo`} className="" />
      </div>
    </Link>
  );
}
