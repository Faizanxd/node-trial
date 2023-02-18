import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Layout from "./components/layout";

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
          <Route index element={<h1>hello</h1>} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default function App() {
  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  );
}
