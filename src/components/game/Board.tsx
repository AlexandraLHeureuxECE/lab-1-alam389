import Cell from "./Cell";

interface BoardProps {
  cells: (string | null)[];
  onCellClick: (index: number) => void;
  winningLine: number[] | null;
  disabled: boolean;
}

const Board = ({ cells, onCellClick, winningLine, disabled }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-card grid-shadow w-full min-w-[280px]">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          value={cell as "X" | "O" | null}
          onClick={() => onCellClick(index)}
          isWinning={winningLine?.includes(index) ?? false}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default Board;
