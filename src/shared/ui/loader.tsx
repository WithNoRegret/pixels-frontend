import { Loader2 } from "lucide-react";

import { cn } from "@/shared/lib";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={cn("", className)}>
      <Loader2 className="w-5 h-5 animate-spin" />
    </div>
  );
};
