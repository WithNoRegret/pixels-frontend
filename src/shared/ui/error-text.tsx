import { cn } from "@/shared/lib";

interface ErrorTextProps {
  message: string;
  className?: string;
}

export const ErrorText = ({ message, className }: ErrorTextProps) => {
  return <p className={cn("text-red-500", className)}>{message}</p>;
};
