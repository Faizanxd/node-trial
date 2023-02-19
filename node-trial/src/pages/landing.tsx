import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="place-content-center pt-16">
      <h1 className=" text-center text-5xl font-bold tracking-wider text-textbrown">
        Make the world a tastier place!
      </h1>
      <p className="pt-8 pb-12 text-center text-2xl tracking-wider text-brown">
        Share your favorite restaurants or find recommendations of other users!
      </p>
      <div className="flex justify-center p-4">
        <ul>
          <li
            className="m-2 inline-block cursor-pointer rounded-lg bg-brown p-12 hover:bg-morebrown"
            onClick={() => navigate("/browse")}
          >
            <a href="/browse" className="tracking-widest text-lightbrown">
              Browse Shared Restaurants
            </a>
          </li>
          <li
            className="m-2 inline-block cursor-pointer rounded-lg bg-brown p-12 hover:bg-morebrown"
            onClick={() => navigate("/share")}
          >
            <a className="tracking-widest text-lightbrown" href="/share">
              Share Your Favorite Restaurant
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
