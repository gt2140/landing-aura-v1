"use client";

import { useEffect, useRef } from "react";

type IconType = "platform" | "agents" | "workflow" | "integrations" | "pricing";

interface PixelIconProps {
  type: IconType;
  size?: number;
}

function drawPlatform(ctx: CanvasRenderingContext2D, width: number, time: number) {
  const centerX = width / 2;
  const centerY = width / 2;
  const radius = width * 0.36;
  const pixel = width / 12;

  const pulse = 0.6 + 0.4 * Math.sin(time * 0.003);
  ctx.fillStyle = `rgba(0,0,0,${pulse})`;
  const coreSize = pixel * 1.4;
  ctx.fillRect(centerX - coreSize / 2, centerY - coreSize / 2, coreSize, coreSize);

  const nodeCount = 6;
  for (let index = 0; index < nodeCount; index += 1) {
    const angle = (index / nodeCount) * Math.PI * 2 + time * 0.0015;
    const nodeX = centerX + Math.cos(angle) * radius;
    const nodeY = centerY + Math.sin(angle) * radius;
    const opacity = 0.3 + 0.5 * ((Math.sin(angle * 2 + time * 0.002) + 1) / 2);

    ctx.fillStyle = `rgba(0,0,0,${opacity})`;
    ctx.fillRect(Math.round(nodeX / pixel) * pixel - pixel / 2, Math.round(nodeY / pixel) * pixel - pixel / 2, pixel, pixel);

    const steps = 5;
    for (let step = 1; step < steps; step += 1) {
      const lineX = centerX + (nodeX - centerX) * (step / steps);
      const lineY = centerY + (nodeY - centerY) * (step / steps);
      const lineOpacity = (0.06 + 0.1 * (step / steps)) * pulse;

      ctx.fillStyle = `rgba(0,0,0,${lineOpacity})`;
      ctx.fillRect(Math.round(lineX / pixel) * pixel, Math.round(lineY / pixel) * pixel, pixel * 0.7, pixel * 0.7);
    }
  }
}

const AGENT_FRAMES: number[][][] = [
  [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
  ],
  [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
  ],
  [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
  ],
  [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
  ],
];

function drawAgents(ctx: CanvasRenderingContext2D, width: number, time: number) {
  const fps = 6;
  const frameIndex = Math.floor(time / (1000 / fps)) % AGENT_FRAMES.length;
  const frame = AGENT_FRAMES[frameIndex];
  const rows = frame.length;
  const columns = frame[0].length;
  const pixel = Math.floor(width / columns);
  const offsetX = Math.floor((width - columns * pixel) / 2);
  const offsetY = Math.floor((width - rows * pixel) / 2);
  const bobY = Math.sin(time * 0.012) * pixel * 0.4;

  frame.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (!cell) return;
      const opacity = 0.5 + 0.5 * Math.sin(time * 0.001 + rowIndex * 0.3);
      ctx.fillStyle = `rgba(0,0,0,${opacity})`;
      ctx.fillRect(offsetX + columnIndex * pixel, offsetY + rowIndex * pixel + bobY, pixel - 1, pixel - 1);
    });
  });
}

function drawWorkflow(ctx: CanvasRenderingContext2D, width: number, time: number) {
  const pixel = Math.floor(width / 12);
  const centerX = width / 2;
  const centerY = width / 2;
  const shape = [
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
  ];

  const rows = shape.length;
  const columns = shape[0].length;
  const offsetX = centerX - (columns * pixel) / 2;
  const offsetY = centerY - (rows * pixel) / 2;
  const period = 2400;
  const fill = (time % period) / period;

  shape.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (!cell) return;

      const isTopHalf = rowIndex < rows / 2;
      const isMiddle = rowIndex === Math.floor(rows / 2);
      let sandAlpha = 0;

      if (isTopHalf) {
        sandAlpha = Math.max(0, 1 - Math.min(1, fill * rows * 1.4 - rowIndex));
      } else if (isMiddle) {
        sandAlpha = 0.5 + 0.4 * Math.sin(time * 0.008);
      } else {
        const rowFromCenter = rowIndex - Math.floor(rows / 2);
        sandAlpha = Math.max(0, Math.min(1, fill * rows * 1.4 - rowFromCenter));
      }

      const alpha = Math.max(0.12, sandAlpha * 0.85);
      ctx.fillStyle = `rgba(0,0,0,${alpha})`;
      ctx.fillRect(offsetX + columnIndex * pixel, offsetY + rowIndex * pixel, pixel - 1, pixel - 1);
    });
  });
}

function drawIntegrations(ctx: CanvasRenderingContext2D, width: number, time: number) {
  const columns = 5;
  const rows = 4;
  const pixel = Math.floor(width / (columns + 1));
  const gap = 2;
  const offsetX = Math.floor((width - columns * (pixel + gap)) / 2);
  const offsetY = Math.floor((width - rows * (pixel + gap)) / 2);
  const total = columns * rows;
  const wave = time * 0.0008;

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      const phase = (index / total) * Math.PI * 2;
      const alpha = 0.1 + 0.65 * ((Math.sin(wave + phase) + 1) / 2);
      const x = offsetX + column * (pixel + gap);
      const y = offsetY + row * (pixel + gap);

      ctx.fillStyle = `rgba(0,0,0,${alpha})`;
      ctx.fillRect(x, y, pixel, pixel);
    }
  }
}

function drawPricing(ctx: CanvasRenderingContext2D, width: number, time: number) {
  const pixel = Math.floor(width / 12);
  const bars = 3;
  const barWidth = pixel * 2;
  const gap = pixel;
  const total = bars * barWidth + (bars - 1) * gap;
  const offsetX = Math.floor((width - total) / 2);
  const maxHeight = width * 0.7;
  const heights = [0.45, 0.75, 0.55];
  const wave = Math.sin(time * 0.0015) * 0.12;

  heights.forEach((height, index) => {
    const animatedHeight = Math.max(0.1, height + wave * (index % 2 === 0 ? 1 : -1));
    const barHeight = animatedHeight * maxHeight;
    const x = offsetX + index * (barWidth + gap);
    const y = width - barHeight - pixel;
    const rowCount = Math.floor(barHeight / pixel);

    for (let row = 0; row < rowCount; row += 1) {
      const progress = 1 - row / rowCount;
      const alpha = 0.15 + progress * 0.7;
      ctx.fillStyle = `rgba(0,0,0,${alpha})`;
      ctx.fillRect(x, y + row * pixel, barWidth, pixel - 1);
    }
  });
}

export function PixelIcon({ type, size = 40 }: PixelIconProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const draw = (time: number) => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = size * devicePixelRatio;
      canvas.height = size * devicePixelRatio;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      context.clearRect(0, 0, size, size);
      context.imageSmoothingEnabled = false;

      switch (type) {
        case "platform":
          drawPlatform(context, size, time);
          break;
        case "agents":
          drawAgents(context, size, time);
          break;
        case "workflow":
          drawWorkflow(context, size, time);
          break;
        case "integrations":
          drawIntegrations(context, size, time);
          break;
        case "pricing":
          drawPricing(context, size, time);
          break;
      }

      frameRef.current = window.requestAnimationFrame(draw);
    };

    frameRef.current = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, [size, type]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: size,
        height: size,
        display: "block",
        flexShrink: 0,
        imageRendering: "pixelated",
      }}
    />
  );
}
