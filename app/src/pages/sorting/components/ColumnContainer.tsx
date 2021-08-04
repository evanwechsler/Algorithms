import { ReactElement, useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import Columns, { Column } from "./Columns";
import "../sorting.scss";

interface Props {
  sortingFunction: (
    columns: Column[]
  ) => Generator<Column[], Column[], unknown>;
}

export default function ColumnContainer({
  sortingFunction,
}: Props): ReactElement {
  const [containerHeight, setHeight] = useState(0);
  const [containerWidth, setWidth] = useState(0);
  const [ref, { height, width }] = useMeasure();
  useEffect(() => {
    setHeight(height);
    window.addEventListener("resize", () => setHeight(height));
    window.addEventListener("resize", () => setHeight(height));

    return window.removeEventListener("resize", () => setHeight(height));
  }, [height]);

  useEffect(() => {
    setWidth(width);
    window.addEventListener("resize", () => setWidth(width));
    window.addEventListener("resize", () => setWidth(width));

    return window.removeEventListener("resize", () => setWidth(width));
  }, [width]);

  return (
    <div className="column-container" ref={ref}>
      <Columns
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        sortingFunction={sortingFunction}
      />
    </div>
  );
}
