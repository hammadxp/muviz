import { HiHome, HiOutlineMagnifyingGlass, HiPlus, HiStar, HiVideoCamera, HiTv } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed flex w-full px-12 py-6 font-Rubik backdrop-blur-3xl">
      <NavLink to="/">
        <span className="font-bold uppercase">Muviz</span>
      </NavLink>
      <div className="mx-auto flex gap-12">
        <NavLink to="/" className="flex items-center gap-2 uppercase transition hover:opacity-90">
          <HiHome /> Home
        </NavLink>
        <NavLink to="/search" className="flex items-center gap-2 uppercase transition hover:opacity-90">
          <HiOutlineMagnifyingGlass /> Search
        </NavLink>
        <NavLink to="/movies" className="flex items-center gap-2 uppercase transition hover:opacity-90">
          <HiVideoCamera /> Movies
        </NavLink>
        <NavLink to="/shows" className="flex items-center gap-2 uppercase transition hover:opacity-90">
          <HiTv /> Shows
        </NavLink>
        <NavLink to="/originals" className="flex items-center gap-2 uppercase transition hover:opacity-90">
          <HiStar /> Originals
        </NavLink>
        <NavLink to="/watchlist" className="flex items-center gap-2 uppercase transition hover:opacity-90">
          <HiPlus /> Watchlist
        </NavLink>
      </div>
      <NavLink to="/account">
        <span>Hammad</span>
      </NavLink>
    </nav>
  );
}
