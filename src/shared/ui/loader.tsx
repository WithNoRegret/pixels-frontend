import { Loader2 } from "lucide-react";

import { cn } from "@/shared/lib";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return <Loader2 className={cn("w-5 h-5 animate-spin", className)} />;
};
