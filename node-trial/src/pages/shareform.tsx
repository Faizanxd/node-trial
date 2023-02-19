import React from "react";

export default function ShareForm() {
  return (
    <div className="inset-0 pt-16">
      <h1 className=" text-center text-5xl font-bold text-textbrown">
        Share your favorite restaurant!
      </h1>
      <div className="flex justify-center pt-8">
        <form className="inline-block h-[31rem] w-[20rem] place-content-center justify-center rounded-lg border bg-[#dbba72] px-8 py-2 shadow-lg md:h-[30rem] md:w-[40rem]">
          <div className="w-[15rem h-[4rem] text-brown md:w-[100%] ">
            <label className="text-2xl tracking-wide" htmlFor="name">
              Restaurant name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded border border-brown"
            />
          </div>
          <div className="w-[15rem h-[4rem] text-brown md:w-[100%]">
            <label className="text-2xl tracking-wide" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="w-full rounded border border-brown"
            />
          </div>
          <div className="w-[15rem h-[4rem] text-brown md:w-[100%]">
            <label className="text-2xl tracking-wide" htmlFor="cuisine">
              Type of cuisine
            </label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              placeholder="e.g. Mexican"
              required
              className="w-full rounded border border-brown "
            />
          </div>
          <div className="w-[15rem h-[4rem] text-brown md:w-[100%]">
            <label className="text-2xl tracking-wide" htmlFor="website">
              Restaurant website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="w-full rounded border border-brown"
            />
          </div>
          <div className="w-[15rem] text-brown md:w-[100%]">
            <label className="text-2xl tracking-wide" htmlFor="descript ion">
              Why do you recommend it?
            </label>
            <textarea
              name="description"
              id="description"
              rows={5}
              required
              className="w-full rounded border border-brown"
            ></textarea>
          </div>
          <div className="">
            <button className=" text-md justify-center rounded-lg bg-morebrown p-2 font-Poppins font-semibold text-lightbrown hover:text-brown">
              Share Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
