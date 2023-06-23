import { Link } from "react-router-dom";

export default function MainRowItem({ item }) {
  return (
    <Link
      to={`category/${item.titleShort}`}
      className="grid cursor-pointer place-items-center rounded-xl border-[3px] border-[#41434f] bg-gradient-to-b from-[#31313d] to-[#20202a] px-12 py-6 shadow-2xl transition hover:scale-[.98] hover:shadow-white/10"
    >
      <img src={`images/main-row/${item.titleShort}.png`} alt={`${item.title} logo`} className="" />
    </Link>
  );
}
