import { cn } from "@/shared/lib";
import { Logo } from "@/shared/ui";

interface GameHeaderProps {
  className?: string;
}

export const GameHeader = ({ className }: GameHeaderProps) => {
  return (
    <header className={cn("px-5 py-2 bg-background", className)}>
      <Logo />
    </header>
  );
};
