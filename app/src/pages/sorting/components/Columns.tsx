import React, { ReactElement, useEffect, useState, forwardRef } from "react";
import FlipMove from "react-flip-move";
import sleep from "src/helpers/sleep";
import "../sorting.scss";
import SortingControls from "./SortingControls";

interface Props {
  containerWidth: number;
  containerHeight: number;
  sortingFunction: (
    columns: Column[]
  ) => Generator<Column[], Column[], unknown>;
}
export enum ColumnState {
  Idle = "idle",
  Checking = "checking",
  Swapping = "swapping",
  Pivot = "pivot",
  Done = "done",
}

export interface Column {
  value: number;
  state: ColumnState;
}

const FlipColumn = forwardRef(
  (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => <div ref={ref} {...props}></div>
);

export default function Columns({
  containerWidth,
  containerHeight,
  sortingFunction,
}: Props): ReactElement {
  const defaultNumCols = 10;
  const defaultSpeed = 200;
  const [padding, setPadding] = useState(0);
  const [cols, setCols] = useState<Column[]>([]);
  const [numCols, setNumCols] = useState(defaultNumCols);
  const [speed, setSpeed] = useState(defaultSpeed);

  async function handleSort() {
    const generator = sortingFunction(cols);
    let isSorting = true;
    while (isSorting) {
      const next = generator.next();
      if (next.done) isSorting = false;

      await sleep(speed);

      setCols([...next.value]);
    }
  }

  useEffect(() => {
    let colArr: Column[] = [];
    for (let i = 0; i < numCols; i++) {
      const value = Math.random();
      colArr.push({ value, state: ColumnState.Idle });
    }
    setCols(colArr);
  }, [numCols]);
  useEffect(() => {
    const el = document.querySelector("div.cols") as HTMLDivElement;
    const style = window.getComputedStyle(el);
    setPadding(parseInt(style.padding));
    console.log(style.height);
    const max = Math.max(...cols.map((col) => col.value));
    console.log((containerHeight - padding) * max);
  }, []);
  return (
    <div>
      <FlipMove className="cols" duration={50}>
        {cols.map((col) => (
          <FlipColumn
            style={{
              width:
                (containerWidth - 2 * padding) / numCols -
                ((containerWidth - 2 * padding) / numCols) * 0.2,
              height: (containerHeight - 2 * padding) * col.value,
            }}
            className={`col ${col.state}`}
            key={col.value}
          />
        ))}
      </FlipMove>
      <SortingControls
        sort={handleSort}
        setNumCols={setNumCols}
        setSpeed={setSpeed}
        numCols={numCols}
        speed={speed}
      />
    </div>
  );
}
