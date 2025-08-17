"use client";

import { Mouse } from "lucide-react";

import { useColorPicker } from "@/features/color-picker";
import { cn } from "@/shared/lib";
import { ErrorText, Loader } from "@/shared/ui";

import { useBoard } from "../api/use-board";
import { useCanvas } from "../model/useCanvas";

interface GameCanvasProps {
  className?: string;
}

export const GameCanvas = ({ className }: GameCanvasProps) => {
  const {
    data: palette,
    isLoading: isPaletteLoading,
    isError: isPaletteError,
    error: paletteError,
  } = useColorPicker();
  const {
    data: boardData,
    isLoading: isBoardLoading,
    isError: isBoardError,
    error: boardError,
  } = useBoard();
  const { canvasRef } = useCanvas({ boardData, palette });

  if (isPaletteLoading || isBoardLoading) {
    return <Loader className="h-[85vh] flex justify-center items-center" />;
  }

  if (isPaletteError) {
    return <ErrorText message={`Error loading palette: ${paletteError.message}`} />;
  }

  if (isBoardError) {
    return <ErrorText message={`Error loading board: ${boardError.message}`} />;
  }

  return (
    <div className="relative w-full h-full">
      <canvas
        className={cn("w-full touch-none bg-zinc-100 hover:cursor-pointer", className)}
        width={200}
        height={200}
        ref={canvasRef}
      />
      <div className="absolute top-5 left-5 bg-white/80 px-3 py-1 text-sm rounded border border-zinc-300 shadow flex items-center gap-1">
        <Mouse size={16} /> Scroll to zoom, drag to move
      </div>
    </div>
  );
};
