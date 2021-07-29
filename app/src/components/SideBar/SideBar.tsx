import { ReactElement } from "react";
import Dropdown from "./Dropdown";
import "./sidebar.scss";

export default function SideBar(): ReactElement {
  return (
    <div className="side-bar">
      <Dropdown title="Sorting">
        <p>Quick Sort</p>
        <p>Merge Sort</p>
        <p>Insertion Sort</p>
        <p>Bubble Sort</p>
      </Dropdown>
      <Dropdown title="Path Finding">
        <p>Quick Sort</p>
        <p>Merge Sort</p>
        <p>Insertion Sort</p>
        <p>Bubble Sort</p>
      </Dropdown>
      <Dropdown title="Graphs">
        <p>Quick Sort</p>
        <p>Merge Sort</p>
        <p>Insertion Sort</p>
        <p>Bubble Sort</p>
      </Dropdown>
    </div>
  );
}
