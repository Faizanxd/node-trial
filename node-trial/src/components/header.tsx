export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex flex-col flex-wrap items-center px-5 py-5 pb-5 md:flex-row md:justify-around">
        <a className="flex text-gray-900 " href="/">
          <span className="rounded-xl bg-newyellow p-[15px] font-Poppins text-3xl font-bold text-white">
            Eatwell
          </span>
        </a>
        <nav className=" flex flex-wrap items-center justify-center text-2xl md:justify-evenly">
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
  );
}
