import { cn } from "@/shared/lib";
import { GameCanvas } from "@/widgets/game-canvas";
import { GameHeader } from "@/widgets/game-header";

interface GameProps {
  className?: string;
}

export const Game = ({ className }: GameProps) => {
  return (
    <div className={cn("", className)}>
      <GameHeader />
      <GameCanvas />
    </div>
  );
};
