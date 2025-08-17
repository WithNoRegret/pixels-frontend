import { useCallback, useEffect, useRef } from "react";

import { Color, Pixel } from "@/shared/model";

interface Props {
  boardData?: Pixel[];
  palette?: Color[];
}

export const useCanvas = ({ boardData, palette }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const size = 20;
  const cols = 100;
  const rows = 100;

  const drawCell = useCallback(
    (ctx: CanvasRenderingContext2D, index: number, color: number) => {
      const x = index % cols;
      const y = Math.floor(index / cols);
      ctx.fillStyle =
        palette?.find((paletteColor) => paletteColor.id === color)?.hexCode ?? "#fff";
      ctx.fillRect(x * size, y * size, size, size);
    },
    [palette]
  );

  const drawBoard = useCallback(
    (ctx: CanvasRenderingContext2D, board: Pixel[]) => {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, cols * size, rows * size);
      board.forEach(({ index, color }) => drawCell(ctx, index, color));
    },
    [drawCell]
  );

  const drawGrid = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = "#e0e0e0";
    for (let x = 0; x <= cols; x++) {
      ctx.beginPath();
      ctx.moveTo(x * size, 0);
      ctx.lineTo(x * size, rows * size);
      ctx.stroke();
    }
    for (let y = 0; y <= rows; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * size);
      ctx.lineTo(cols * size, y * size);
      ctx.stroke();
    }
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.translate(offsetRef.current.x, offsetRef.current.y);
    ctx.scale(scaleRef.current, scaleRef.current);

    if (boardData) {
      drawBoard(ctx, boardData);
    }
    drawGrid(ctx);

    ctx.restore();
  }, [boardData, drawBoard]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    if (!boardData || !palette) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoom = e.deltaY < 0 ? 1.1 : 0.9;
      if (zoom === 0.9 && scaleRef.current < 0.15) return;
      scaleRef.current *= zoom;
      draw();
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      offsetRef.current.x += dx;
      offsetRef.current.y += dy;
      lastPos.current = { x: e.clientX, y: e.clientY };
      draw();
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("wheel", handleWheel);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [boardData, draw, palette]);

  useEffect(() => {
    if (!boardData || !palette) return;

    draw();
  }, [boardData, draw, palette]);

  return { canvasRef };
};
