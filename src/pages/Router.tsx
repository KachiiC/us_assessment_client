import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./Routes";

export const Router = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
