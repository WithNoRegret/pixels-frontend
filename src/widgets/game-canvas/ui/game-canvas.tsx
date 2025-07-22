"use client";

import { useRef } from "react";

import { cn } from "@/shared/lib";

interface GameCanvasProps {
  className?: string;
}

export const GameCanvas = ({ className }: GameCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <canvas
      className={cn("border border-black", className)}
      width={200}
      height={200}
      ref={canvasRef}
    />
  );
};
