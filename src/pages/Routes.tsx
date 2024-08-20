import { Home } from "./Home";
import { Server } from "./Servers";

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "server/:region",
    element: <Server />
  }
];
