import Link from "next/link";

import { cn } from "@/shared/lib";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("", className)}>
      <h1 className="text-5xl">Pixel Battle</h1>
    </Link>
  );
};
