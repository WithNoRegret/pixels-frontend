"use client";

import { cn } from "@/shared/lib";

import { useCanvas } from "../model/useCanvas";

interface GameCanvasProps {
  className?: string;
}

export const GameCanvas = ({ className }: GameCanvasProps) => {
  const { canvasRef } = useCanvas();

  return (
    <canvas
      className={cn("w-full touch-none bg-zinc-100", className)}
      width={200}
      height={200}
      ref={canvasRef}
    />
  );
};
