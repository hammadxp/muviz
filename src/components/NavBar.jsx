import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as NavMenu from "@radix-ui/react-navigation-menu";
import { HiHome, HiOutlineMagnifyingGlass, HiPlus, HiStar, HiVideoCamera, HiTv, HiUserCircle } from "react-icons/hi2";

export default function NavBar() {
  const [mobile, setMobile] = useState(false);
  const mobileViewport = 600;

  useEffect(() => {
    function handleResize() {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      setMobile(viewportWidth <= mobileViewport);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mobile) {
    return (
      <NavMenu.Root>
        <NavMenu.List className="fixed left-0 top-0 z-30 flex h-[72px] w-full items-center bg-slate-900 bg-opacity-50 px-12 backdrop-blur backdrop-filter">
          <NavMenu.Item>
            <NavMenu.Link>
              <NavLink to="/" className="font-bold uppercase">
                Muviz
              </NavLink>
            </NavMenu.Link>
          </NavMenu.Item>

          <div className="mx-auto flex gap-12">
            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/" className="flex items-center gap-2 uppercase transition hover:opacity-90">
                  <HiHome /> Home
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>
            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/search" className="flex items-center gap-2 uppercase transition hover:opacity-90">
                  <HiOutlineMagnifyingGlass /> Search
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>
            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/movies" className="flex items-center gap-2 uppercase transition hover:opacity-90">
                  <HiVideoCamera /> Movies
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>
            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/shows" className="flex items-center gap-2 uppercase transition hover:opacity-90">
                  <HiTv /> Shows
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>
            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/originals" className="flex items-center gap-2 uppercase transition hover:opacity-90">
                  <HiStar /> Originals
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>
            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/watchlist" className="flex items-center gap-2 uppercase transition hover:opacity-90">
                  <HiPlus /> Watchlist
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>
          </div>

          <NavMenu.Item>
            <NavMenu.Link>
              <NavLink to="/account" className="flex items-center gap-2 uppercase transition hover:opacity-90">
                Hammad <HiUserCircle className="text-3xl" />
              </NavLink>
            </NavMenu.Link>
          </NavMenu.Item>

          <NavMenu.Indicator />
        </NavMenu.List>

        <NavMenu.Viewport />
      </NavMenu.Root>
    );
  }

  if (mobile) {
    return (
      <>
        <div className="fixed left-0 top-0 z-30 flex h-[56px] w-full items-center bg-slate-900 bg-opacity-50 px-12 backdrop-blur backdrop-filter">
          <span className="mx-auto cursor-default text-xl font-bold uppercase">Muviz</span>
        </div>

        <NavMenu.Root className="fixed bottom-0 left-0 z-30 flex h-[60px] w-full justify-center bg-slate-900">
          <NavMenu.List className="flex h-full w-[24rem] items-center justify-between">
            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/" className="opacity-50 aria-[current=page]:opacity-100">
                  <HiHome className="text-4xl" />
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>

            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/search" className="opacity-50 aria-[current=page]:opacity-100">
                  <HiOutlineMagnifyingGlass className="text-4xl" />
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>
            <NavMenu.Item>
              <NavMenu.Link>
                <NavLink to="/account" className="opacity-50 aria-[current=page]:opacity-100">
                  <HiUserCircle className="text-4xl" />
                </NavLink>
              </NavMenu.Link>
            </NavMenu.Item>
          </NavMenu.List>
        </NavMenu.Root>
      </>
    );
  }
}
