import { useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <header>
        <div
          ref={headerRef}
          className="flex flex-row justify-around p-4 md:container  md:items-center "
        >
          <a className="flex text-gray-900 " href="/">
            <span className="rounded-xl bg-newyellow p-[15px] font-Poppins text-3xl font-bold text-white">
              Eatwell
            </span>
          </a>

          <nav className="hidden md:flex md:flex-wrap md:items-center  md:justify-evenly md:text-2xl">
            <a
              className="mr-5 rounded-md p-[4px] text-morebrown  hover:bg-lightbrown"
              href="/browse"
            >
              Browse Restaurants
            </a>
            <a
              className="mr-5 rounded-md p-[4px] text-morebrown  hover:bg-lightbrown"
              href="/share"
            >
              Share a Restaurant
            </a>
            <a
              className="mr-5 rounded-md p-[4px] text-morebrown  hover:bg-lightbrown"
              href="/about"
            >
              About Eatwell
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
