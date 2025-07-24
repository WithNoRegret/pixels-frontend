import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/shared/lib";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cn(
        "rounded border border-zinc-300 cursor-pointer transition-transform hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
