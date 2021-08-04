import { ReactElement } from "react";
import ColumnContainer from "./components/ColumnContainer";
import { Column, ColumnState } from "./components/Columns";

export default function BubbleSort(): ReactElement {
  const swap = (colArr: Column[], xIndex: number, yIndex: number) => {
    const temp = colArr[xIndex];
    colArr[xIndex] = colArr[yIndex];
    colArr[yIndex] = temp;
  };

  function* bubbleSort(columns: Column[]) {
    let i, j;
    const length = columns.length;
    let done = false;
    for (i = 0; i < length; i++) {
      if (done) break;
      done = true;
      for (j = 0; j < length - 1; j++) {
        columns[j].state = ColumnState.Checking;
        columns[j + 1].state = ColumnState.Checking;
        yield columns;
        if (columns[j].value < columns[j + 1].value) {
          done = false;
          columns[j].state = ColumnState.Swapping;
          columns[j + 1].state = ColumnState.Swapping;
          yield columns;
          swap(columns, j, j + 1);
          yield columns;
        }
        columns[j].state = ColumnState.Idle;
        columns[j + 1].state = ColumnState.Idle;
        yield columns;
      }
    }
    columns.forEach((col) => (col.state = ColumnState.Done));
    return columns;
  }
  return (
    <div>
      <h1>Bubble Sort</h1>
      <ColumnContainer sortingFunction={bubbleSort} />
    </div>
  );
}
