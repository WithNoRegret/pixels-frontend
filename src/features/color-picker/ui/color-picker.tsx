"use client";

import { cn } from "@/shared/lib";
import { ErrorText } from "@/shared/ui";

import { useColorPicker } from "../api/use-color-picker";
import { COLOR_PALETTE } from "../model/colorPalette";

interface ColorPickerProps {
  className?: string;
}

export const ColorPicker = ({ className }: ColorPickerProps) => {
  const { data, isLoading, isError, error } = useColorPicker();

  console.log(data);

  return (
    <div
      className={cn(
        "p-4 bg-zinc-50 rounded border border-zinc-300 shadow w-fit",
        className
      )}
    >
      <h2 className="font-semibold mb-4 text-center">Pick a color</h2>
      {isError ? (
        <ErrorText message={error.message} />
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-8 gap-2">
          {COLOR_PALETTE.map((color) => (
            <button
              key={color}
              className={cn(
                "w-10 h-10 rounded border border-zinc-300 cursor-pointer transition-transform hover:scale-105"
              )}
              style={{ backgroundColor: color }}
              aria-label={`Choose color ${color}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
