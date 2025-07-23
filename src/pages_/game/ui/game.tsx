import { ColorPicker } from "@/features/choose-color";
import { cn } from "@/shared/lib";
import { GameCanvas } from "@/widgets/game-canvas";
import { GameHeader } from "@/widgets/game-header";

interface GameProps {
  className?: string;
}

export const Game = ({ className }: GameProps) => {
  return (
    <div className={cn("relative", className)}>
      <GameHeader />
      <GameCanvas />
      <ColorPicker className="fixed left-5 bottom-5" />
    </div>
  );
};
