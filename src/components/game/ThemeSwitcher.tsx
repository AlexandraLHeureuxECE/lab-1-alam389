import { cn } from "@/lib/utils";

type Theme = "classic" | "neon" | "ocean" | "sunset";

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const themes: { id: Theme; name: string; colors: string[] }[] = [
  { id: "classic", name: "Classic", colors: ["#f5f3ef", "#2d3748", "#d97706"] },
  { id: "neon", name: "Neon", colors: ["#1a1625", "#c084fc", "#22d3ee"] },
  { id: "ocean", name: "Ocean", colors: ["#e8f4f8", "#0369a1", "#0d9488"] },
  { id: "sunset", name: "Sunset", colors: ["#fef3e8", "#ea580c", "#db2777"] },
];

const ThemeSwitcher = ({ currentTheme, onThemeChange }: ThemeSwitcherProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        Theme
      </span>
      <div className="flex gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={cn(
              "group relative w-10 h-10 rounded-full overflow-hidden transition-all duration-200",
              "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              currentTheme === theme.id && "ring-2 ring-primary ring-offset-2"
            )}
            title={theme.name}
            aria-label={`Switch to ${theme.name} theme`}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: theme.colors[0] }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/2"
              style={{
                background: `linear-gradient(90deg, ${theme.colors[1]} 50%, ${theme.colors[2]} 50%)`,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
