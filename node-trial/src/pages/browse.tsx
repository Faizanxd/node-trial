import React from "react";

export default function Browse() {
  return (
    <div className=" place-content-center pt-16">
      <h1 className=" text-center text-5xl font-bold tracking-wider text-textbrown">
        Recommended restaurants
      </h1>
      <p className="pt-4 pb-12 text-center text-2xl tracking-wider text-brown">
        Find your next favorite restaurants with help of our other users!
      </p>

      <div className="flex justify-center ">
        <div className="h-[250px] w-[500px] overflow-hidden  rounded  bg-[#edd49f] p-6">
          <ul>
            <li className="">
              <article>
                <h2 className="text-2xl font-semibold tracking-wider text-[#6e4e07]">
                  Restaurant Title
                </h2>
                <div>
                  <p className="text-lg text-[#aa945f]">Mexican</p>
                  <p className="text-lg text-[#aa945f]">
                    Address of the restaurant, including city
                  </p>
                </div>
                <p className="text-xl tracking-wider text-[#6e4e07]">
                  A short description, explaining why this restaurant is
                  awesome!
                </p>
                <div className="pt-2 md:ml-[290px]">
                  <a
                    href=""
                    className="rounded bg-morebrown p-2 font-Poppins text-xl text-white hover:bg-[#b79751]"
                  >
                    View Website
                  </a>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
