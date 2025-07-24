import { ColorPicker } from "@/features/color-picker";
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
      <main>
        <GameCanvas />
        <ColorPicker className="fixed left-5 bottom-5" />
      </main>
    </div>
  );
};
