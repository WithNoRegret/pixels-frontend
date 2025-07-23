import { cn } from "@/shared/lib";

import { COLOR_PALETTE } from "../model/colorPalette";

interface ColorPickerProps {
  className?: string;
}

export const ColorPicker = ({ className }: ColorPickerProps) => {
  return (
    <div
      className={cn(
        "p-4 bg-zinc-50 rounded border border-zinc-300 shadow w-fit",
        className
      )}
    >
      <h2 className="font-semibold mb-4 text-center">Pick a color</h2>
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
    </div>
  );
};
