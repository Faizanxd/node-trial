import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import Browse from "./pages/browse";
import Layout from "./components/layout";
import LandingPage from "./pages/landing";
import ShareForm from "./pages/shareform";
import About from "./pages/about";

function RouteError() {
  return (
    <article className="grid place-content-center gap-2 p-4 text-black">
      <h1 className="text-4xl">The page you're looking for doesn't exist.</h1>
      <p className="text-2xl">
        Browse restaurants{" "}
        <Link to="/browse" className="p-2 font-extrabold hover:text-gray-300">
          Here!
        </Link>
      </p>
    </article>
  );
}

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<RouteError />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/browse" element={<Layout />}>
          <Route index element={<Browse />} />
        </Route>
        <Route path="/share" element={<Layout />}>
          <Route index element={<ShareForm />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default function App() {
  return (
    <div className=" font-Roboto">
      <AppRouter />;
    </div>
  );
}
