import { cn } from "@/shared/lib";
import { Logo } from "@/shared/ui";

interface GameHeaderProps {
  className?: string;
}

export const GameHeader = ({ className }: GameHeaderProps) => {
  return (
    <header className={cn("", className)}>
      <Logo />
    </header>
  );
};
