import { cn } from "@/lib/utils";

interface CellProps {
  value: "X" | "O" | null;
  onClick: () => void;
  isWinning: boolean;
  disabled: boolean;
}

const Cell = ({ value, onClick, isWinning, disabled }: CellProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || value !== null}
      className={cn(
        "aspect-square w-full rounded-lg border-2 transition-all duration-200",
        "flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold min-h-[72px] sm:min-h-[84px]",
        "bg-[hsl(var(--cell-bg))] border-[hsl(var(--cell-border))]",
        "hover:bg-[hsl(var(--cell-hover))] hover:scale-[1.02]",
        "disabled:cursor-not-allowed disabled:hover:scale-100",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isWinning && "win-cell"
      )}
      aria-label={value ? `Cell marked ${value}` : "Empty cell"}
    >
      {value && (
        <span
          className={cn(
            "animate-pop-in",
            value === "X" ? "cell-x" : "cell-o"
          )}
        >
          {value}
        </span>
      )}
    </button>
  );
};

export default Cell;
