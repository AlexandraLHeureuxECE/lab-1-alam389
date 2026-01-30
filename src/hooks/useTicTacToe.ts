import { useState, useCallback } from "react";

type Player = "X" | "O";
type Cell = Player | null;

const WINNING_LINES = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6], // diagonal top-right to bottom-left
];

const checkWinner = (cells: Cell[]): { winner: Player | null; line: number[] | null } => {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return { winner: cells[a], line };
    }
  }
  return { winner: null, line: null };
};

const useTicTacToe = () => {
  const [cells, setCells] = useState<Cell[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const { winner } = checkWinner(cells);
  const isDraw = !winner && cells.every((cell) => cell !== null);
  const isGameOver = winner !== null || isDraw;

  const handleCellClick = useCallback(
    (index: number) => {
      if (cells[index] || isGameOver) return;

      const newCells = [...cells];
      newCells[index] = currentPlayer;
      setCells(newCells);

      const result = checkWinner(newCells);
      if (result.winner) {
        setWinningLine(result.line);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    },
    [cells, currentPlayer, isGameOver]
  );

  const resetGame = useCallback(() => {
    setCells(() => Array(9).fill(null));
    setCurrentPlayer("X");
    setWinningLine(null);
  }, []);

  return {
    cells,
    currentPlayer,
    winner,
    isDraw,
    isGameOver,
    winningLine,
    handleCellClick,
    resetGame,
  };
};

export default useTicTacToe;
