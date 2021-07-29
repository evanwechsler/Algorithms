import React from "react";
import Graphs from "src/pages/Graphs";
import Home from "src/pages/Home";
import PathFinding from "src/pages/PathFinding";
import Sorting from "src/pages/Sorting";
interface Route {
  path: string;
  component: React.ElementType;
  exact?: boolean;
}

export const mainRoutes: Route[] = [
  { path: "/", component: Home, exact: true },
  { path: "/sorting", component: Sorting },
  { path: "/path-finding", component: PathFinding },
  { path: "/graphs", component: Graphs },
];
