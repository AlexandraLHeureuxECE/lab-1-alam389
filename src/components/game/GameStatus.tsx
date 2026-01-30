import { cn } from "@/lib/utils";

interface GameStatusProps {
  currentPlayer: "X" | "O";
  winner: "X" | "O" | null;
  isDraw: boolean;
}

const GameStatus = ({ currentPlayer, winner, isDraw }: GameStatusProps) => {
  const getMessage = () => {
    if (winner) {
      return (
        <span className="animate-fade-in">
          Player{" "}
          <span className={cn(winner === "X" ? "cell-x" : "cell-o", "font-bold")}>
            {winner}
          </span>{" "}
          wins! 🎉
        </span>
      );
    }
    if (isDraw) {
      return <span className="animate-fade-in">It's a draw! 🤝</span>;
    }
    return (
      <span>
        Player{" "}
        <span
          className={cn(
            currentPlayer === "X" ? "cell-x" : "cell-o",
            "font-bold transition-colors duration-200"
          )}
        >
          {currentPlayer}
        </span>
        's turn
      </span>
    );
  };

  return (
    <div className="text-center">
      <p className="text-xl md:text-2xl font-medium text-foreground">
        {getMessage()}
      </p>
    </div>
  );
};

export default GameStatus;
