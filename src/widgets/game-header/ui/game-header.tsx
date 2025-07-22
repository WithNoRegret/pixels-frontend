import { cn } from "@/shared/lib";
import { Logo } from "@/shared/ui";

interface GameHeaderProps {
  className?: string;
}

export const GameHeader = ({ className }: GameHeaderProps) => {
  return (
    <header className={cn("px-3 py-2 border-b border-zinc-200 ", className)}>
      <Logo />
    </header>
  );
};
