import React, { ReactElement } from "react";

interface Props {
  sort: () => Promise<void>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  speed: number;
  setNumCols: React.Dispatch<React.SetStateAction<number>>;
  numCols: number;
}

export default function SortingControls({
  sort,
  setSpeed,
  setNumCols,
  speed,
  numCols,
}: Props): ReactElement {
  return (
    <div>
      <button onClick={sort}>Sort</button>
      <input
        type="range"
        min={2}
        max={100}
        onChange={(e) => {
          setNumCols(parseInt(e.target.value));
        }}
        value={numCols}
      />
      <input
        type="range"
        min={1}
        max={10}
        onChange={(e) => {
          setSpeed((11 - parseInt(e.target.value)) * 100);
        }}
        value={11 - speed / 100}
      />
    </div>
  );
}
