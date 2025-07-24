"use client";

import { cn } from "@/shared/lib";
import { Button, ErrorText, Loader } from "@/shared/ui";

import { useColorPicker } from "../api/use-color-picker";

interface ColorPickerProps {
  className?: string;
}

export const ColorPicker = ({ className }: ColorPickerProps) => {
  const { data, isLoading, isError, error } = useColorPicker();

  return (
    <div
      className={cn(
        "p-4 bg-zinc-50 rounded border border-zinc-300 shadow w-fit",
        className
      )}
    >
      <h2 className="font-semibold text-lg mb-4 text-center">Pick a color</h2>
      {isError ? (
        <ErrorText message={error.message} />
      ) : isLoading ? (
        <Loader className="mx-auto" />
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {data &&
            data.map((color) => (
              <Button
                key={color.id}
                className={cn("w-10 h-10")}
                style={{ backgroundColor: color.hexCode }}
                aria-label={`Choose color ${color.name}`}
                type="button"
              />
            ))}
        </div>
      )}
    </div>
  );
};
