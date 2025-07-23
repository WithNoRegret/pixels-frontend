import { Swords } from "lucide-react";
import Link from "next/link";

import { cn } from "@/shared/lib";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1", className)}>
      <h1 className="text-5xl">Pixel Battle</h1>
      <Swords size={28} />
    </Link>
  );
};
