import React from "react";
import Graphs from "src/pages/graphs/Graphs";
import Home from "src/pages/Home";
import PathFinding from "src/pages/pathFinding/PathFinding";
import BubbleSort from "src/pages/sorting/BubbleSort";
import InsertionSort from "src/pages/sorting/InsertionSort";
import MergeSort from "src/pages/sorting/MergeSort";
import QuickSort from "src/pages/sorting/QuickSort";
import Sorting from "src/pages/sorting/Sorting";
interface Route {
  path: string;
  component: React.ElementType;
  exact?: boolean;
}

interface NavLink {
  title: string;
  path: string;
  subLinks: SubLink[];
}

interface SubLink {
  title: string;
  path: string;
}

export const mainRoutes: Route[] = [
  { path: "/", component: Home, exact: true },
  { path: "/sorting", component: Sorting },
  { path: "/path-finding", component: PathFinding },
  { path: "/graphs", component: Graphs },
];

export const sortingRoutes: Route[] = [
  { path: "/quick-sort", component: QuickSort },
  { path: "/merge-sort", component: MergeSort },
  { path: "/bubble-sort", component: BubbleSort },
  { path: "/insertion-sort", component: InsertionSort },
];

export const navLinks: NavLink[] = [
  {
    title: "Sorting",
    path: "/sorting",
    subLinks: [
      {
        title: "Quick Sort",
        path: "/quick-sort",
      },
      {
        title: "Merge Sort",
        path: "/merge-sort",
      },
      {
        title: "Bubble Sort",
        path: "/bubble-sort",
      },
      {
        title: "Insertion Sort",
        path: "/insertion-sort",
      },
    ],
  },
  {
    title: "Path Finding",
    path: "/path-finding",
    subLinks: [
      {
        title: "Quick Sort",
        path: "/quick-sort",
      },
      {
        title: "Merge Sort",
        path: "/merge-sort",
      },
      {
        title: "Bubble Sort",
        path: "/bubble-sort",
      },
      {
        title: "Insertion Sort",
        path: "/insertion-sort",
      },
    ],
  },
  {
    title: "Graphs",
    path: "graphs",
    subLinks: [
      {
        title: "Quick Sort",
        path: "/quick-sort",
      },
      {
        title: "Merge Sort",
        path: "/merge-sort",
      },
      {
        title: "Bubble Sort",
        path: "/bubble-sort",
      },
      {
        title: "Insertion Sort",
        path: "/insertion-sort",
      },
    ],
  },
];
